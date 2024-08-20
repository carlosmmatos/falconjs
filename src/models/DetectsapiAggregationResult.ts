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
import type { DetectsapiAggregationResultItem } from "./DetectsapiAggregationResultItem";
import { DetectsapiAggregationResultItemFromJSON, DetectsapiAggregationResultItemFromJSONTyped, DetectsapiAggregationResultItemToJSON } from "./DetectsapiAggregationResultItem";

/**
 *
 * @export
 * @interface DetectsapiAggregationResult
 */
export interface DetectsapiAggregationResult {
    /**
     * collection of aggregate results matching the criteria
     * @type {Array<DetectsapiAggregationResultItem>}
     * @memberof DetectsapiAggregationResult
     */
    buckets: Array<DetectsapiAggregationResultItem>;
    /**
     * aggregate query name as provided in the request
     * @type {string}
     * @memberof DetectsapiAggregationResult
     */
    name: string;
    /**
     * sum of the document counts for all buckets that are not part of the response
     * @type {number}
     * @memberof DetectsapiAggregationResult
     */
    sumOtherDocCount?: number;
}

/**
 * Check if a given object implements the DetectsapiAggregationResult interface.
 */
export function instanceOfDetectsapiAggregationResult(value: object): value is DetectsapiAggregationResult {
    if (!("buckets" in value) || value["buckets"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    return true;
}

export function DetectsapiAggregationResultFromJSON(json: any): DetectsapiAggregationResult {
    return DetectsapiAggregationResultFromJSONTyped(json, false);
}

export function DetectsapiAggregationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetectsapiAggregationResult {
    if (json == null) {
        return json;
    }
    return {
        buckets: (json["buckets"] as Array<any>).map(DetectsapiAggregationResultItemFromJSON),
        name: json["name"],
        sumOtherDocCount: json["sum_other_doc_count"] == null ? undefined : json["sum_other_doc_count"],
    };
}

export function DetectsapiAggregationResultToJSON(value?: DetectsapiAggregationResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        buckets: (value["buckets"] as Array<any>).map(DetectsapiAggregationResultItemToJSON),
        name: value["name"],
        sum_other_doc_count: value["sumOtherDocCount"],
    };
}
