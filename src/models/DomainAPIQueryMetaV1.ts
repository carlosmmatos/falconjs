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
import type { DomainAPIQueryPagingV1 } from "./DomainAPIQueryPagingV1";
import { DomainAPIQueryPagingV1FromJSON, DomainAPIQueryPagingV1FromJSONTyped, DomainAPIQueryPagingV1ToJSON } from "./DomainAPIQueryPagingV1";

/**
 *
 * @export
 * @interface DomainAPIQueryMetaV1
 */
export interface DomainAPIQueryMetaV1 {
    /**
     *
     * @type {DomainAPIQueryPagingV1}
     * @memberof DomainAPIQueryMetaV1
     */
    pagination?: DomainAPIQueryPagingV1;
    /**
     *
     * @type {string}
     * @memberof DomainAPIQueryMetaV1
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof DomainAPIQueryMetaV1
     */
    queryTime: number;
    /**
     *
     * @type {string}
     * @memberof DomainAPIQueryMetaV1
     */
    traceId: string;
}

/**
 * Check if a given object implements the DomainAPIQueryMetaV1 interface.
 */
export function instanceOfDomainAPIQueryMetaV1(value: object): value is DomainAPIQueryMetaV1 {
    if (!("queryTime" in value) || value["queryTime"] === undefined) return false;
    if (!("traceId" in value) || value["traceId"] === undefined) return false;
    return true;
}

export function DomainAPIQueryMetaV1FromJSON(json: any): DomainAPIQueryMetaV1 {
    return DomainAPIQueryMetaV1FromJSONTyped(json, false);
}

export function DomainAPIQueryMetaV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIQueryMetaV1 {
    if (json == null) {
        return json;
    }
    return {
        pagination: json["pagination"] == null ? undefined : DomainAPIQueryPagingV1FromJSON(json["pagination"]),
        poweredBy: json["powered_by"] == null ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        traceId: json["trace_id"],
    };
}

export function DomainAPIQueryMetaV1ToJSON(value?: DomainAPIQueryMetaV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        pagination: DomainAPIQueryPagingV1ToJSON(value["pagination"]),
        powered_by: value["poweredBy"],
        query_time: value["queryTime"],
        trace_id: value["traceId"],
    };
}
