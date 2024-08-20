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
/**
 *
 * @export
 * @interface ModelsDetectionEngineInfoType
 */
export interface ModelsDetectionEngineInfoType {
    /**
     *
     * @type {string}
     * @memberof ModelsDetectionEngineInfoType
     */
    apkStaticVersion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsDetectionEngineInfoType
     */
    engineVersion: string;
    /**
     *
     * @type {Date}
     * @memberof ModelsDetectionEngineInfoType
     */
    performedAt: Date;
}

/**
 * Check if a given object implements the ModelsDetectionEngineInfoType interface.
 */
export function instanceOfModelsDetectionEngineInfoType(value: object): value is ModelsDetectionEngineInfoType {
    if (!("apkStaticVersion" in value) || value["apkStaticVersion"] === undefined) return false;
    if (!("engineVersion" in value) || value["engineVersion"] === undefined) return false;
    if (!("performedAt" in value) || value["performedAt"] === undefined) return false;
    return true;
}

export function ModelsDetectionEngineInfoTypeFromJSON(json: any): ModelsDetectionEngineInfoType {
    return ModelsDetectionEngineInfoTypeFromJSONTyped(json, false);
}

export function ModelsDetectionEngineInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsDetectionEngineInfoType {
    if (json == null) {
        return json;
    }
    return {
        apkStaticVersion: json["ApkStaticVersion"],
        engineVersion: json["EngineVersion"],
        performedAt: new Date(json["PerformedAt"]),
    };
}

export function ModelsDetectionEngineInfoTypeToJSON(value?: ModelsDetectionEngineInfoType | null): any {
    if (value == null) {
        return value;
    }
    return {
        ApkStaticVersion: value["apkStaticVersion"],
        EngineVersion: value["engineVersion"],
        PerformedAt: value["performedAt"].toISOString(),
    };
}
