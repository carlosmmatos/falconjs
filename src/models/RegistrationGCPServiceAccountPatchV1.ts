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
import type { DomainCondition } from "./DomainCondition";
import { DomainConditionFromJSON, DomainConditionFromJSONTyped, DomainConditionToJSON } from "./DomainCondition";

/**
 *
 * @export
 * @interface RegistrationGCPServiceAccountPatchV1
 */
export interface RegistrationGCPServiceAccountPatchV1 {
    /**
     *
     * @type {string}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    clientEmail?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    clientId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    privateKey?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    privateKeyId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    projectId?: string;
    /**
     *
     * @type {Array<DomainCondition>}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    serviceAccountConditions?: Array<DomainCondition>;
    /**
     *
     * @type {number}
     * @memberof RegistrationGCPServiceAccountPatchV1
     */
    serviceAccountId?: number;
}

/**
 * Check if a given object implements the RegistrationGCPServiceAccountPatchV1 interface.
 */
export function instanceOfRegistrationGCPServiceAccountPatchV1(value: object): value is RegistrationGCPServiceAccountPatchV1 {
    return true;
}

export function RegistrationGCPServiceAccountPatchV1FromJSON(json: any): RegistrationGCPServiceAccountPatchV1 {
    return RegistrationGCPServiceAccountPatchV1FromJSONTyped(json, false);
}

export function RegistrationGCPServiceAccountPatchV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationGCPServiceAccountPatchV1 {
    if (json == null) {
        return json;
    }
    return {
        clientEmail: json["client_email"] == null ? undefined : json["client_email"],
        clientId: json["client_id"] == null ? undefined : json["client_id"],
        privateKey: json["private_key"] == null ? undefined : json["private_key"],
        privateKeyId: json["private_key_id"] == null ? undefined : json["private_key_id"],
        projectId: json["project_id"] == null ? undefined : json["project_id"],
        serviceAccountConditions: json["service_account_conditions"] == null ? undefined : (json["service_account_conditions"] as Array<any>).map(DomainConditionFromJSON),
        serviceAccountId: json["service_account_id"] == null ? undefined : json["service_account_id"],
    };
}

export function RegistrationGCPServiceAccountPatchV1ToJSON(value?: RegistrationGCPServiceAccountPatchV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        client_email: value["clientEmail"],
        client_id: value["clientId"],
        private_key: value["privateKey"],
        private_key_id: value["privateKeyId"],
        project_id: value["projectId"],
        service_account_conditions: value["serviceAccountConditions"] == null ? undefined : (value["serviceAccountConditions"] as Array<any>).map(DomainConditionToJSON),
        service_account_id: value["serviceAccountId"],
    };
}
