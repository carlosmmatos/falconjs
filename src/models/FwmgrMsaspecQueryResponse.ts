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
import type { FwmgrMsaspecError } from "./FwmgrMsaspecError";
import { FwmgrMsaspecErrorFromJSON, FwmgrMsaspecErrorFromJSONTyped, FwmgrMsaspecErrorToJSON } from "./FwmgrMsaspecError";
import type { FwmgrMsaspecMetaInfo } from "./FwmgrMsaspecMetaInfo";
import { FwmgrMsaspecMetaInfoFromJSON, FwmgrMsaspecMetaInfoFromJSONTyped, FwmgrMsaspecMetaInfoToJSON } from "./FwmgrMsaspecMetaInfo";

/**
 *
 * @export
 * @interface FwmgrMsaspecQueryResponse
 */
export interface FwmgrMsaspecQueryResponse {
    /**
     *
     * @type {Array<FwmgrMsaspecError>}
     * @memberof FwmgrMsaspecQueryResponse
     */
    errors?: Array<FwmgrMsaspecError>;
    /**
     *
     * @type {FwmgrMsaspecMetaInfo}
     * @memberof FwmgrMsaspecQueryResponse
     */
    meta: FwmgrMsaspecMetaInfo;
    /**
     *
     * @type {Array<string>}
     * @memberof FwmgrMsaspecQueryResponse
     */
    resources: Array<string>;
}

/**
 * Check if a given object implements the FwmgrMsaspecQueryResponse interface.
 */
export function instanceOfFwmgrMsaspecQueryResponse(value: object): value is FwmgrMsaspecQueryResponse {
    if (!("meta" in value) || value["meta"] === undefined) return false;
    if (!("resources" in value) || value["resources"] === undefined) return false;
    return true;
}

export function FwmgrMsaspecQueryResponseFromJSON(json: any): FwmgrMsaspecQueryResponse {
    return FwmgrMsaspecQueryResponseFromJSONTyped(json, false);
}

export function FwmgrMsaspecQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrMsaspecQueryResponse {
    if (json == null) {
        return json;
    }
    return {
        errors: json["errors"] == null ? undefined : (json["errors"] as Array<any>).map(FwmgrMsaspecErrorFromJSON),
        meta: FwmgrMsaspecMetaInfoFromJSON(json["meta"]),
        resources: json["resources"],
    };
}

export function FwmgrMsaspecQueryResponseToJSON(value?: FwmgrMsaspecQueryResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        errors: value["errors"] == null ? undefined : (value["errors"] as Array<any>).map(FwmgrMsaspecErrorToJSON),
        meta: FwmgrMsaspecMetaInfoToJSON(value["meta"]),
        resources: value["resources"],
    };
}
