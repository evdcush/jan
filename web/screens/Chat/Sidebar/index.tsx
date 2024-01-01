/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { getUserSpace, openFileExplorer, joinPath } from '@janhq/core'

import {
  Input,
  Textarea,
  Form,
  Button,
  FormField,
  FormItem,
  FormControl,
} from '@janhq/uikit'

import { atom, useAtomValue } from 'jotai'

import { twMerge } from 'tailwind-merge'

import LogoMark from '@/containers/Brand/Logo/Mark'
import CardSidebar from '@/containers/CardSidebar'

import DropdownListSidebar, {
  selectedModelAtom,
} from '@/containers/DropdownListSidebar'

import { useCreateNewThread } from '@/hooks/useCreateNewThread'

import useUpdateModelParameters from '@/hooks/useUpdateModelParameters'

import { getConfigurationsData } from '@/utils/componentSettings'
import { toSettingParams } from '@/utils/model_param'

import EngineSetting from '../EngineSetting'
import ModelSetting from '../ModelSetting'

import settingComponentBuilder from '../ModelSetting/settingComponentBuilder'

import {
  activeThreadAtom,
  getActiveThreadIdAtom,
  getActiveThreadModelParamsAtom,
  threadStatesAtom,
} from '@/helpers/atoms/Thread.atom'

export const showRightSideBarAtom = atom<boolean>(true)

const Sidebar: React.FC = () => {
  const showing = useAtomValue(showRightSideBarAtom)
  const activeThread = useAtomValue(activeThreadAtom)
  const activeModelParams = useAtomValue(getActiveThreadModelParamsAtom)
  const selectedModel = useAtomValue(selectedModelAtom)
  const { updateThreadMetadata } = useCreateNewThread()
  const { updateModelParameter } = useUpdateModelParameters()
  const threadStates = useAtomValue(threadStatesAtom)
  const threadId = useAtomValue(getActiveThreadIdAtom)
  const modelEngineParams = toSettingParams(activeModelParams)

  const componentDataEngineSetting = getConfigurationsData(modelEngineParams)

  const onReviewInFinderClick = async (type: string) => {
    if (!activeThread) return
    const activeThreadState = threadStates[activeThread.id]
    if (!activeThreadState.isFinishInit) {
      alert('Thread is not started yet')
      return
    }

    const userSpace = await getUserSpace()
    let filePath = undefined
    const assistantId = activeThread.assistants[0]?.assistant_id
    switch (type) {
      case 'Engine':
      case 'Thread':
        filePath = await joinPath(['threads', activeThread.id])
        break
      case 'Model':
        if (!selectedModel) return
        filePath = await joinPath(['models', selectedModel.id])
        break
      case 'Assistant':
        if (!assistantId) return
        filePath = await joinPath(['assistants', assistantId])
        break
      default:
        break
    }

    if (!filePath) return
    const fullPath = await joinPath([userSpace, filePath])
    openFileExplorer(fullPath)
  }

  const onViewJsonClick = async (type: string) => {
    if (!activeThread) return
    const activeThreadState = threadStates[activeThread.id]
    if (!activeThreadState.isFinishInit) {
      alert('Thread is not started yet')
      return
    }

    const userSpace = await getUserSpace()
    let filePath = undefined
    const assistantId = activeThread.assistants[0]?.assistant_id
    switch (type) {
      case 'Engine':
      case 'Thread':
        filePath = await joinPath(['threads', activeThread.id, 'thread.json'])
        break
      case 'Model':
        if (!selectedModel) return
        filePath = await joinPath(['models', selectedModel.id, 'model.json'])
        break
      case 'Assistant':
        if (!assistantId) return
        filePath = await joinPath(['assistants', assistantId, 'assistant.json'])
        break
      default:
        break
    }

    if (!filePath) return
    const fullPath = await joinPath([userSpace, filePath])
    openFileExplorer(fullPath)
  }

  const form = useForm()

  const filterChangedFormFields = <T extends FieldValues>(
    allFields: T,
    dirtyFields: Partial<Record<keyof T, boolean | boolean[]>>
  ): Partial<T> => {
    const changedFieldValues = Object.keys(dirtyFields).reduce(
      (acc, currentField) => {
        const isDirty = Array.isArray(dirtyFields[currentField])
          ? (dirtyFields[currentField] as boolean[]).some((value) => {
              value === true
            })
          : dirtyFields[currentField] === true
        if (isDirty) {
          return {
            ...acc,
            [currentField]: allFields[currentField],
          }
        }
        return acc
      },
      {} as Partial<T>
    )

    return changedFieldValues
  }

  const onSubmit = async (values: any) => {
    if (!threadId) return
    if (!activeThread) return

    if (Object.keys(form.formState.dirtyFields).length) {
      if (
        Object.keys(form.formState.dirtyFields).includes('title') ||
        Object.keys(form.formState.dirtyFields).includes('instructions')
      ) {
        updateThreadMetadata({
          ...activeThread,
          title: values.title || activeThread.title,
          assistants: [
            {
              ...activeThread.assistants[0],
              instructions:
                values.instructions || activeThread?.assistants[0].instructions,
            },
          ],
        })
      }
      updateModelParameter(
        threadId,
        filterChangedFormFields(values, form.formState.dirtyFields)
      )
      form.reset()
    }
  }

  return (
    <div
      className={twMerge(
        'h-full flex-shrink-0 overflow-x-hidden border-l border-border bg-background transition-all duration-100 dark:bg-background/20',
        showing
          ? 'w-80 translate-x-0 opacity-100'
          : 'w-0 translate-x-full opacity-0'
      )}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div
            className={twMerge(
              'flex flex-col gap-1 delay-200',
              showing ? 'animate-enter opacity-100' : 'opacity-0'
            )}
          >
            <div className="flex flex-col space-y-4 p-4">
              <div>
                <label
                  id="thread-title"
                  className="mb-2 inline-block font-bold text-zinc-500 dark:text-gray-300"
                >
                  Title
                </label>
                <FormField
                  key={activeThread?.title}
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <>
                      <FormItem>
                        <FormControl>
                          <Input
                            id="thread-title"
                            {...field}
                            defaultValue={activeThread?.title}
                            name="title"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                          />
                        </FormControl>
                      </FormItem>
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label
                  id="thread-title"
                  className="mb-2 inline-block font-bold text-zinc-500 dark:text-gray-300"
                >
                  Threads ID
                </label>
                <span className="text-xs text-muted-foreground">
                  {activeThread?.id || '-'}
                </span>
              </div>
            </div>

            <CardSidebar
              title="Assistant"
              onRevealInFinderClick={onReviewInFinderClick}
              onViewJsonClick={onViewJsonClick}
            >
              <div className="flex flex-col space-y-4 p-2">
                <div className="flex items-center space-x-2">
                  <LogoMark width={24} height={24} />
                  <span className="font-bold capitalize">
                    {activeThread?.assistants[0].assistant_name ?? '-'}
                  </span>
                </div>
                <div>
                  <label
                    id="thread-title"
                    className="mb-2 inline-block font-bold text-zinc-500 dark:text-gray-300"
                  >
                    Instructions
                  </label>
                  <FormField
                    key={activeThread?.title}
                    control={form.control}
                    name="instructions"
                    render={({ field }) => (
                      <>
                        <FormItem>
                          <FormControl>
                            <Textarea
                              id="assistant-instructions"
                              placeholder="Eg. You are a helpful assistant."
                              {...field}
                              name="instructions"
                              defaultValue={
                                activeThread?.assistants[0].instructions
                              }
                              value={field.value}
                            />
                          </FormControl>
                        </FormItem>
                      </>
                    )}
                  />
                </div>
                {/* Temporary disabled */}
                {/* <div>
              <label
                id="tool-title"
                className="mb-2 inline-block font-bold text-zinc-500 dark:text-gray-300"
              >
                Tools
              </label>
              <div className="flex items-center justify-between">
                <label className="font-medium text-zinc-500 dark:text-gray-300">
                  Retrieval
                </label>
                <Switch name="retrieval" />
              </div>
            </div> */}
              </div>
            </CardSidebar>
            <CardSidebar
              title="Model"
              onRevealInFinderClick={onReviewInFinderClick}
              onViewJsonClick={onViewJsonClick}
            >
              <div className="p-2">
                <DropdownListSidebar />

                <div className="mt-6">
                  <CardSidebar title="Inference Parameters" asChild>
                    <div className="p-2">
                      <ModelSetting form={form} />
                    </div>
                  </CardSidebar>
                </div>

                <div className="mt-4">
                  <CardSidebar title="Model Parameters" asChild>
                    <div className="p-2">
                      {settingComponentBuilder(
                        componentDataEngineSetting,
                        form,
                        true
                      )}
                    </div>
                  </CardSidebar>
                </div>

                <div className="mt-4">
                  <CardSidebar
                    title="Engine Parameters"
                    onRevealInFinderClick={onReviewInFinderClick}
                    onViewJsonClick={onViewJsonClick}
                    asChild
                  >
                    <div className="p-2">
                      <EngineSetting form={form} />
                    </div>
                  </CardSidebar>
                </div>

                {Object.keys(form.formState.dirtyFields).length !== 0 && (
                  <div className="pt-4">
                    <Button type="submit" block>
                      Submit
                    </Button>
                  </div>
                )}
              </div>
            </CardSidebar>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default React.memo(Sidebar)
