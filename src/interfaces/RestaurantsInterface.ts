export type RestaurantInfoInterface = {
    info: {
      id: string
      name: string
      cloudinaryImageId: string
      locality: string
      areaName: string
      costForTwo: string
      cuisines: Array<string>
      avgRating: number
      parentId: string
      avgRatingString: string
      totalRatingsString: string
      veg:boolean
      sla: {
        deliveryTime: number
        lastMileTravel: number
        serviceability: string
        slaString: string
        lastMileTravelString: string
        iconType: string
      }
      availability: {
        nextCloseTime: string
        opened: boolean
      }
      badges: {
        imageBadges: Array<{
          imageId: string
          description: string
        }>
      }
      isOpen: boolean
      aggregatedDiscountInfoV2: {}
      type: string
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: Array<{
              attributes: {
                description: string
                imageId: string
              }
            }>
          }
          textBased: {}
          textExtendedBadges: {}
        }
      }
      differentiatedUi: {
        displayType: string
        differentiatedUiMediaDetails: {
          mediaType: string
          lottie: {}
          video: {}
        }
      }
      reviewsSummary: {}
      displayType: string
      restaurantOfferPresentationInfo: {}
    }
    analytics: {}
    cta: {
      link: string
      type: string
    }
  }
  