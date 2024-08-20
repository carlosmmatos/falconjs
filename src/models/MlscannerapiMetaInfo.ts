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
import type { MlscannerapiQuota } from "./MlscannerapiQuota";
import { MlscannerapiQuotaFromJSON, MlscannerapiQuotaFromJSONTyped, MlscannerapiQuotaToJSON } from "./MlscannerapiQuota";
import type { MsaPaging } from "./MsaPaging";
import { MsaPagingFromJSON, MsaPagingFromJSONTyped, MsaPagingToJSON } from "./MsaPaging";
import type { MsaspecWrites } from "./MsaspecWrites";
import { MsaspecWritesFromJSON, MsaspecWritesFromJSONTyped, MsaspecWritesToJSON } from "./MsaspecWrites";

/**
 *
 * @export
 * @interface MlscannerapiMetaInfo
 */
export interface MlscannerapiMetaInfo {
    /**
     *
     * @type {MsaPaging}
     * @memberof MlscannerapiMetaInfo
     */
    pagination?: MsaPaging;
    /**
     *
     * @type {string}
     * @memberof MlscannerapiMetaInfo
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof MlscannerapiMetaInfo
     */
    queryTime: number;
    /**
     *
     * @type {MlscannerapiQuota}
     * @memberof MlscannerapiMetaInfo
     */
    quota?: MlscannerapiQuota;
    /**
     *
     * @type {string}
     * @memberof MlscannerapiMetaInfo
     */
    traceId: string;
    /**
     *
     * @type {MsaspecWrites}
     * @memberof MlscannerapiMetaInfo
     */
    writes?: MsaspecWrites;
}

/**
 * Check if a given object implements the MlscannerapiMetaInfo interface.
 */
export function instanceOfMlscannerapiMetaInfo(value: object): value is MlscannerapiMetaInfo {
    if (!("queryTime" in value) || value["queryTime"] === undefined) return false;
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function MlscannerapiMetaInfoFromJSON(json: any): MlscannerapiMetaInfo {
    return MlscannerapiMetaInfoFromJSONTyped(json, false);
}

export function MlscannerapiMetaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MlscannerapiMetaInfo {
    if (json == null) {
        return json;
    }
    return {
        pagination: json["pagination"] == null ? undefined : MsaPagingFromJSON(json["pagination"]),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        quota: json["quota"] == null ? undefined : MlscannerapiQuotaFromJSON(json["quota"]),
        traceId: json["trace_id"],
        writes: json["writes"] == null ? undefined : MsaspecWritesFromJSON(json["writes"]),
    };
}

export function MlscannerapiMetaInfoToJSON(value?: MlscannerapiMetaInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        pagination: MsaPagingToJSON(value["pagination"]),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        quota: MlscannerapiQuotaToJSON(value["quota"]),
        trace_id: value["traceId"],
        writes: MsaspecWritesToJSON(value["writes"]),
    };
}
