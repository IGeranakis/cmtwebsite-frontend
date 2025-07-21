import qs from "qs";
import { getStrapiURL } from "@/utils/get-strapi-url";
import { fetchAPI } from "@/utils/fetch-api";

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
              cta: true,
            },
          },
          "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },
          "blocks.milestones-block": {
            populate: {
              milestones: {
                populate: true,
              },
            },
          },
          "blocks.vertical-accordion-block": {
            populate: {
              items: {
                populate: {
                  cta: true,
                },
              },
            },
          },
          "blocks.services-accordion-block": {
            populate: {
              items: true,
            },
          },
          "blocks.logo-carousel-block": {
            populate: {
              items: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.testimonials-block": {
            populate: {
              items: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.features-block": {
            populate: {
             
              cta: true,
            },
          },
        },
      },
    },
  },
  { encodeValuesOnly: true }
);


const BLOG_PAGE_SIZE = 3;
const BASE_URL = getStrapiURL();


export async function getHomePage() {
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);


  url.search = homePageQuery;



  return fetchAPI(url.href, { method: "GET" });
}



const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: true,
        cta: true,
      },
    },
    footer: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
         column: {
          populate: {
            link: true,
          },
        },
        socialLink: true,
        bottomLink: true,
      },
    },
  },
});


export async function getGlobalSettings() {
  const path = "/api/global";
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}



const pageBySlugQuery = (slug: string) =>
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        blocks: {
          on: {
            "blocks.hero-section": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                logo: {
                  populate: {
                    image: {
                      fields: ["url", "alternativeText"],
                    },
                  },
                },
                cta: true,
              },
            },
            "blocks.info-block": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                cta: true,
              },
            },
            "blocks.featured-article": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                link: true,
              },
            },
            "blocks.about-section": {
              populate: {
                infographic: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            "blocks.about-info": true
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );


export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}



export async function getContent(path: string, featured?:boolean,query?:string, page?:string) {
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    sort: ["createdAt:desc"],
       filters: {
         $or: [
        { title: { $containsi: query } },
        { description: { $containsi: query } },
      ],
    
      ...(featured && { featured: { $eq: featured } }),
    },
     pagination: {
      pageSize: BLOG_PAGE_SIZE,
      page: parseInt(page || "1"),
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      imageAuthor: {
    fields: ["url", "alternativeText"], // ✅ ADD THIS
  },
      
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

const blogPopulate = {
  blocks: {
    on: {
      "blocks.hero-section": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          logo: {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          cta: true,
        },
      },
      "blocks.info-block": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          cta: true,
        },
      },
      "blocks.featured-article": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: true,
        },
      },
      
      "blocks.heading": {
        populate: true,
      },
      "blocks.paragraph-with-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.paragraph": {
        populate: true,
      },
      "blocks.full-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  },
};

export async function getContentBySlug(slug: string, path: string) {
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      imageAuthor: {
            fields: ["url", "alternativeText"],
      },
      ...blogPopulate,
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}


