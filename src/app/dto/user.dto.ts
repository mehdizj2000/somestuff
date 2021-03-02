import { BaseDto } from './base.dto';
export interface UserDto extends BaseDto {
    login: string; //SeaBassTian,
    // id:  string; //10586972,
    node_id: string; //MDQ6VXNlcjEwNTg2OTcy,
    avatar_url: string; //https://avatars.githubusercontent.com/u/10586972?v=4,
    gravatar_id: string; //,
    url: string; //https://api.github.com/users/SeaBassTian,
    html_url: string; //https://github.com/SeaBassTian,
    followers_url: string; //https://api.github.com/users/SeaBassTian/followers,
    following_url: string; //https://api.github.com/users/SeaBassTian/following{/other_user},
    gists_url: string; //https://api.github.com/users/SeaBassTian/gists{/gist_id},
    starred_url: string; //https://api.github.com/users/SeaBassTian/starred{/owner}{/repo},
    subscriptions_url: string; //https://api.github.com/users/SeaBassTian/subscriptions,
    organizations_url: string; //https://api.github.com/users/SeaBassTian/orgs,
    repos_url: string; //https://api.github.com/users/SeaBassTian/repos,
    events_url: string; //https://api.github.com/users/SeaBassTian/events{/privacy},
    received_events_url: string; //https://api.github.com/users/SeaBassTian/received_events,
    type: string; //User,
    site_admin: boolean; //false
}