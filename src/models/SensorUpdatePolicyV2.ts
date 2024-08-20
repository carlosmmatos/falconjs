/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and examples, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation).     To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`.    Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { SensorUpdateSettingsRespV2 } from "./SensorUpdateSettingsRespV2";
import { SensorUpdateSettingsRespV2FromJSON, SensorUpdateSettingsRespV2FromJSONTyped, SensorUpdateSettingsRespV2ToJSON } from "./SensorUpdateSettingsRespV2";
import type { HostGroupsHostGroupV1 } from "./HostGroupsHostGroupV1";
import { HostGroupsHostGroupV1FromJSON, HostGroupsHostGroupV1FromJSONTyped, HostGroupsHostGroupV1ToJSON } from "./HostGroupsHostGroupV1";

/**
 *
 * @export
 * @interface SensorUpdatePolicyV2
 */
export interface SensorUpdatePolicyV2 {
    /**
     * The customer id associated with the policy
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    cid: string;
    /**
     * The email of the user which created the policy
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    createdBy: string;
    /**
     * The time at which the policy was created
     * @type {Date}
     * @memberof SensorUpdatePolicyV2
     */
    createdTimestamp: Date;
    /**
     * The description of a policy. Use this field to provide a high level summary of what this policy enforces
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    description: string;
    /**
     * If a policy is enabled it will be used during the course of policy evaluation
     * @type {boolean}
     * @memberof SensorUpdatePolicyV2
     */
    enabled: boolean;
    /**
     * The groups that are currently attached to the policy
     * @type {Array<HostGroupsHostGroupV1>}
     * @memberof SensorUpdatePolicyV2
     */
    groups: Array<HostGroupsHostGroupV1>;
    /**
     * The unique id of the policy
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    id: string;
    /**
     * The email of the user which last modified the policy
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    modifiedBy: string;
    /**
     * The time at which the policy was last modified
     * @type {Date}
     * @memberof SensorUpdatePolicyV2
     */
    modifiedTimestamp: Date;
    /**
     * The human readable name of the policy
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof SensorUpdatePolicyV2
     */
    platformName: SensorUpdatePolicyV2PlatformNameEnum;
    /**
     *
     * @type {SensorUpdateSettingsRespV2}
     * @memberof SensorUpdatePolicyV2
     */
    settings: SensorUpdateSettingsRespV2;
}

/**
 * @export
 */
export const SensorUpdatePolicyV2PlatformNameEnum = {
    Windows: "Windows",
    Mac: "Mac",
    Linux: "Linux",
} as const;
export type SensorUpdatePolicyV2PlatformNameEnum = (typeof SensorUpdatePolicyV2PlatformNameEnum)[keyof typeof SensorUpdatePolicyV2PlatformNameEnum];

/**
 * Check if a given object implements the SensorUpdatePolicyV2 interface.
 */
export function instanceOfSensorUpdatePolicyV2(value: object): value is SensorUpdatePolicyV2 {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("createdBy" in value) || value["createdBy"] === undefined) return false;
    if (!("createdTimestamp" in value) || value["createdTimestamp"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("enabled" in value) || value["enabled"] === undefined) return false;
    if (!("groups" in value) || value["groups"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("modifiedBy" in value) || value["modifiedBy"] === undefined) return false;
    if (!("modifiedTimestamp" in value) || value["modifiedTimestamp"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("platformName" in value) || value["platformName"] === undefined) return false;
    if (!("settings" in value) || value["settings"] === undefined) return false;
    return true;
}

export function SensorUpdatePolicyV2FromJSON(json: any): SensorUpdatePolicyV2 {
    return SensorUpdatePolicyV2FromJSONTyped(json, false);
}

export function SensorUpdatePolicyV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): SensorUpdatePolicyV2 {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        createdBy: json["created_by"],
        createdTimestamp: new Date(json["created_timestamp"]),
        description: json["description"],
        enabled: json["enabled"],
        groups: (json["groups"] as Array<any>).map(HostGroupsHostGroupV1FromJSON),
        id: json["id"],
        modifiedBy: json["modified_by"],
        modifiedTimestamp: new Date(json["modified_timestamp"]),
        name: json["name"],
        platformName: json["platform_name"],
        settings: SensorUpdateSettingsRespV2FromJSON(json["settings"]),
    };
}

export function SensorUpdatePolicyV2ToJSON(value?: SensorUpdatePolicyV2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        created_by: value["createdBy"],
        created_timestamp: value["createdTimestamp"].toISOString(),
        description: value["description"],
        enabled: value["enabled"],
        groups: (value["groups"] as Array<any>).map(HostGroupsHostGroupV1ToJSON),
        id: value["id"],
        modified_by: value["modifiedBy"],
        modified_timestamp: value["modifiedTimestamp"].toISOString(),
        name: value["name"],
        platform_name: value["platformName"],
        settings: SensorUpdateSettingsRespV2ToJSON(value["settings"]),
    };
}
