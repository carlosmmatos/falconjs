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
import type { DeviceapiNetworkAddressV1 } from "./DeviceapiNetworkAddressV1";
import { DeviceapiNetworkAddressV1FromJSON, DeviceapiNetworkAddressV1FromJSONTyped, DeviceapiNetworkAddressV1ToJSON } from "./DeviceapiNetworkAddressV1";

/**
 *
 * @export
 * @interface DeviceapiNetworkAddressHistoryV1
 */
export interface DeviceapiNetworkAddressHistoryV1 {
    /**
     *
     * @type {string}
     * @memberof DeviceapiNetworkAddressHistoryV1
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof DeviceapiNetworkAddressHistoryV1
     */
    deviceId: string;
    /**
     *
     * @type {Array<DeviceapiNetworkAddressV1>}
     * @memberof DeviceapiNetworkAddressHistoryV1
     */
    history: Array<DeviceapiNetworkAddressV1>;
}

/**
 * Check if a given object implements the DeviceapiNetworkAddressHistoryV1 interface.
 */
export function instanceOfDeviceapiNetworkAddressHistoryV1(value: object): value is DeviceapiNetworkAddressHistoryV1 {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("deviceId" in value) || value["deviceId"] === undefined) return false;
    if (!("history" in value) || value["history"] === undefined) return false;
    return true;
}

export function DeviceapiNetworkAddressHistoryV1FromJSON(json: any): DeviceapiNetworkAddressHistoryV1 {
    return DeviceapiNetworkAddressHistoryV1FromJSONTyped(json, false);
}

export function DeviceapiNetworkAddressHistoryV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DeviceapiNetworkAddressHistoryV1 {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        deviceId: json["device_id"],
        history: (json["history"] as Array<any>).map(DeviceapiNetworkAddressV1FromJSON),
    };
}

export function DeviceapiNetworkAddressHistoryV1ToJSON(value?: DeviceapiNetworkAddressHistoryV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        device_id: value["deviceId"],
        history: (value["history"] as Array<any>).map(DeviceapiNetworkAddressV1ToJSON),
    };
}
