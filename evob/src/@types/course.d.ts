export type Course = {
    id: number;
    title: string;
    slug: string;
    status: string;
    short_description: string;
    created_at: string; // ISO string format
    updated_at: string; // ISO string format
    tags: string[];
    settings: {
      city: string;
      state: string;
      end_at: string; // ISO string format
      start_at: string; // ISO string format
      course_types: {
        live: boolean;
        online: boolean;
        presential: boolean;
      };
      manual_watched: boolean;
      highlight_banner: boolean;
    };
    long_description: string;
    level: string;
    has_certificate: boolean;
    visibility: string;
    allow_comments: string;
    featured: boolean;
    featured_order: number | null;
    has_free_offer: boolean;
    statement: string | null;
    schedule: string | null;
    city: string | null;
    state: string | null;
    show_subjects_menu: boolean;
    banner: string;
    banner_mobile: string;
    thumbnail_vertical: string | null;
    thumbnail: string;
    duration: string;
    store: {
      id: number;
      name: string;
      slug: string;
      timezone: string;
      brand_id: number;
    };
    publishable: boolean;
    certificate_image: string | null;
    tickets_qty: number;
    classrooms_qty: number;
    lowest_offer: {
      promo_price: number | null;
      original_price: number | null;
      type_offer: string;
    };
    offer_currency: string | null;
  }  