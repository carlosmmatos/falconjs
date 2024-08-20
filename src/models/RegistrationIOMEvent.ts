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
 * @interface RegistrationIOMEvent
 */
export interface RegistrationIOMEvent {
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    accountId: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    accountName: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    azureTenantId: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    cloudProvider: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    customPolicyId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    finding: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    policyId?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    policyStatement: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    policyType?: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    region: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    reportDateTime: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceAttributes: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceCreateTime: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceId: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceIdType: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    resourceUrl: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    service: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    severity: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    status: string;
    /**
     *
     * @type {string}
     * @memberof RegistrationIOMEvent
     */
    tags: string;
}

/**
 * Check if a given object implements the RegistrationIOMEvent interface.
 */
export function instanceOfRegistrationIOMEvent(value: object): value is RegistrationIOMEvent {
    if (!("accountId" in value) || value["accountId"] === undefined) return false;
    if (!("accountName" in value) || value["accountName"] === undefined) return false;
    if (!("azureTenantId" in value) || value["azureTenantId"] === undefined) return false;
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("cloudProvider" in value) || value["cloudProvider"] === undefined) return false;
    if (!("finding" in value) || value["finding"] === undefined) return false;
    if (!("policyStatement" in value) || value["policyStatement"] === undefined) return false;
    if (!("region" in value) || value["region"] === undefined) return false;
    if (!("reportDateTime" in value) || value["reportDateTime"] === undefined) return false;
    if (!("resourceAttributes" in value) || value["resourceAttributes"] === undefined) return false;
    if (!("resourceCreateTime" in value) || value["resourceCreateTime"] === undefined) return false;
    if (!("resourceId" in value) || value["resourceId"] === undefined) return false;
    if (!("resourceIdType" in value) || value["resourceIdType"] === undefined) return false;
    if (!("resourceUrl" in value) || value["resourceUrl"] === undefined) return false;
    if (!("service" in value) || value["service"] === undefined) return false;
    if (!("severity" in value) || value["severity"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("tags" in value) || value["tags"] === undefined) return false;
    return true;
}

export function RegistrationIOMEventFromJSON(json: any): RegistrationIOMEvent {
    return RegistrationIOMEventFromJSONTyped(json, false);
}

export function RegistrationIOMEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationIOMEvent {
    if (json == null) {
        return json;
    }
    return {
        accountId: json["account_id"],
        accountName: json["account_name"],
        azureTenantId: json["azure_tenant_id"],
        cid: json["cid"],
        cloudProvider: json["cloud_provider"],
        customPolicyId: json["custom_policy_id"] == null ? undefined : json["custom_policy_id"],
        finding: json["finding"],
        policyId: json["policy_id"] == null ? undefined : json["policy_id"],
        policyStatement: json["policy_statement"],
        policyType: json["policy_type"] == null ? undefined : json["policy_type"],
        region: json["region"],
        reportDateTime: json["report_date_time"],
        resourceAttributes: json["resource_attributes"],
        resourceCreateTime: json["resource_create_time"],
        resourceId: json["resource_id"],
        resourceIdType: json["resource_id_type"],
        resourceUrl: json["resource_url"],
        service: json["service"],
        severity: json["severity"],
        status: json["status"],
        tags: json["tags"],
    };
}

export function RegistrationIOMEventToJSON(value?: RegistrationIOMEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        account_id: value["accountId"],
        account_name: value["accountName"],
        azure_tenant_id: value["azureTenantId"],
        cid: value["cid"],
        cloud_provider: value["cloudProvider"],
        custom_policy_id: value["customPolicyId"],
        finding: value["finding"],
        policy_id: value["policyId"],
        policy_statement: value["policyStatement"],
        policy_type: value["policyType"],
        region: value["region"],
        report_date_time: value["reportDateTime"],
        resource_attributes: value["resourceAttributes"],
        resource_create_time: value["resourceCreateTime"],
        resource_id: value["resourceId"],
        resource_id_type: value["resourceIdType"],
        resource_url: value["resourceUrl"],
        service: value["service"],
        severity: value["severity"],
        status: value["status"],
        tags: value["tags"],
    };
}
