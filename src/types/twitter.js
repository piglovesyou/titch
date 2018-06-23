// @flow

type Entities = {
  url: Url,
  description: Url,
};

type Entities1 = {
  hashtags: Hashtags[],
  symbols: any[],
  user_mentions: UserMentions[],
  urls: Urls[],
};

type Hashtags = {
  text: string,
  indices: number[],
};

type RetweetedStatus = {
  created_at: string,
  id: number,
  id_str: string,
  text: string,
  truncated: boolean,
  entities: Entities1,
  source: string,
  in_reply_to_status_id: string,
  in_reply_to_status_id_str: string,
  in_reply_to_user_id: string,
  in_reply_to_user_id_str: string,
  in_reply_to_screen_name: string,
  geo: string,
  coordinates: string,
  place: string,
  contributors: string,
  is_quote_status: boolean,
  retweet_count: number,
  favorite_count: number,
  favorited: boolean,
  retweeted: boolean,
  possibly_sensitive: boolean,
  lang: string,
};

type Status = {
  created_at: string,
  id: number,
  id_str: string,
  text: string,
  truncated: boolean,
  entities: Entities1,
  source: string,
  in_reply_to_status_id: string,
  in_reply_to_status_id_str: string,
  in_reply_to_user_id: string,
  in_reply_to_user_id_str: string,
  in_reply_to_screen_name: string,
  geo: string,
  coordinates: string,
  place: string,
  contributors: string,
  retweeted_status: RetweetedStatus,
  is_quote_status: boolean,
  retweet_count: number,
  favorite_count: number,
  favorited: boolean,
  retweeted: boolean,
  lang: string,
};

type Url = {
  urls: Urls[],
};

type Urls = {
  url: string,
  expanded_url: string,
  display_url: string,
  indices: number[],
};

type UserMentions = {
  screen_name: string,
  name: string,
  id: number,
  id_str: string,
  indices: number[],
};

export type TwitterProfile = {
  id: number,
  id_str: string,
  name: string,
  screen_name: string,
  location: string,
  profile_location: string,
  description: string,
  url: string,
  entities: Entities,
  protected: boolean,
  followers_count: number,
  friends_count: number,
  listed_count: number,
  created_at: string,
  favourites_count: number,
  utc_offset: number,
  time_zone: string,
  geo_enabled: boolean,
  verified: boolean,
  statuses_count: number,
  lang: string,
  status: Status,
  contributors_enabled: boolean,
  is_translator: boolean,
  is_translation_enabled: boolean,
  profile_background_color: string,
  profile_background_image_url: string,
  profile_background_image_url_https: string,
  profile_background_tile: boolean,
  profile_image_url: string,
  profile_image_url_https: string,
  profile_banner_url: string,
  profile_link_color: string,
  profile_sidebar_border_color: string,
  profile_sidebar_fill_color: string,
  profile_text_color: string,
  profile_use_background_image: boolean,
  has_extended_profile: boolean,
  default_profile: boolean,
  default_profile_image: boolean,
  following: string,
  follow_request_sent: string,
  notifications: string,
  translator_type: string,
};

