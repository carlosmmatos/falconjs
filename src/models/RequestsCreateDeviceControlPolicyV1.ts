/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import {
    RequestsDeviceControlPolicySettingsV1,
    RequestsDeviceControlPolicySettingsV1FromJSON,
    RequestsDeviceControlPolicySettingsV1FromJSONTyped,
    RequestsDeviceControlPolicySettingsV1ToJSON,
} from "./RequestsDeviceControlPolicySettingsV1";

/**
 *
 * @export
 * @interface RequestsCreateDeviceControlPolicyV1
 */
export interface RequestsCreateDeviceControlPolicyV1 {
    /**
     * If specified the settings of the DeviceControl policy identified by the id will be used
     * @type {string}
     * @memberof RequestsCreateDeviceControlPolicyV1
     */
    cloneId?: string;
    /**
     * The description to use when creating the policy
     * @type {string}
     * @memberof RequestsCreateDeviceControlPolicyV1
     */
    description?: string;
    /**
     * The name to use when creating the policy
     * @type {string}
     * @memberof RequestsCreateDeviceControlPolicyV1
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof RequestsCreateDeviceControlPolicyV1
     */
    platformName: RequestsCreateDeviceControlPolicyV1PlatformNameEnum;
    /**
     *
     * @type {RequestsDeviceControlPolicySettingsV1}
     * @memberof RequestsCreateDeviceControlPolicyV1
     */
    settings?: RequestsDeviceControlPolicySettingsV1;
}

/**
 * @export
 */
export const RequestsCreateDeviceControlPolicyV1PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type RequestsCreateDeviceControlPolicyV1PlatformNameEnum = typeof RequestsCreateDeviceControlPolicyV1PlatformNameEnum[keyof typeof RequestsCreateDeviceControlPolicyV1PlatformNameEnum];

export function RequestsCreateDeviceControlPolicyV1FromJSON(json: any): RequestsCreateDeviceControlPolicyV1 {
    return RequestsCreateDeviceControlPolicyV1FromJSONTyped(json, false);
}

export function RequestsCreateDeviceControlPolicyV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsCreateDeviceControlPolicyV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cloneId: !exists(json, "clone_id") ? undefined : json["clone_id"],
        description: !exists(json, "description") ? undefined : json["description"],
        name: json["name"],
        platformName: json["platform_name"],
        settings: !exists(json, "settings") ? undefined : RequestsDeviceControlPolicySettingsV1FromJSON(json["settings"]),
    };
}

export function RequestsCreateDeviceControlPolicyV1ToJSON(value?: RequestsCreateDeviceControlPolicyV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        clone_id: value.cloneId,
        description: value.description,
        name: value.name,
        platform_name: value.platformName,
        settings: RequestsDeviceControlPolicySettingsV1ToJSON(value.settings),
    };
}
