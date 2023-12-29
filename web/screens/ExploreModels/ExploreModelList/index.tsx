/* eslint-disable @typescript-eslint/naming-convention */
import { Model } from '@janhq/core'

import ExploreModelItem from '@/screens/ExploreModels/ExploreModelItem'

type Props = {
  models: Model[]
}

const ExploreModelList: React.FC<Props> = ({ models }) => {
  const sortedModels = models?.sort((m1, m2) => {
    const aIsFeatured = m1.metadata.tags.includes('Featured')
    const bIsFeatured = m2.metadata.tags.includes('Featured')
    const aIsRecommended = m1.metadata.tags.includes('Recommended')
    const bIsRecommended = m2.metadata.tags.includes('Recommended')

    if (aIsFeatured !== bIsFeatured) {
      return aIsFeatured ? -1 : 1
    } else if (aIsFeatured) {
      // Both are featured
      return m1.metadata.size - m2.metadata.size
    }

    if (aIsRecommended !== bIsRecommended) {
      return aIsRecommended ? -1 : 1
    } else if (aIsRecommended) {
      // Both are recommended
      return m1.metadata.size - m2.metadata.size
    }

    // Neither featured nor recommended
    return m1.metadata.size - m2.metadata.size
  })

  return (
    <div className="relative h-full w-full flex-shrink-0">
      {sortedModels?.map((model) => (
        <ExploreModelItem key={model.id} model={model} />
      ))}
    </div>
  )
}

export default ExploreModelList
