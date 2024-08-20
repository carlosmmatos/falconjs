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
import type { DomainSchedule } from "./DomainSchedule";
import { DomainScheduleFromJSON, DomainScheduleFromJSONTyped, DomainScheduleToJSON } from "./DomainSchedule";
import type { DomainNotifications } from "./DomainNotifications";
import { DomainNotificationsFromJSON, DomainNotificationsFromJSONTyped, DomainNotificationsToJSON } from "./DomainNotifications";
import type { DomainReportMetadata } from "./DomainReportMetadata";
import { DomainReportMetadataFromJSON, DomainReportMetadataFromJSONTyped, DomainReportMetadataToJSON } from "./DomainReportMetadata";
import type { DomainReportParams } from "./DomainReportParams";
import { DomainReportParamsFromJSON, DomainReportParamsFromJSONTyped, DomainReportParamsToJSON } from "./DomainReportParams";
import type { DomainReportExecutionSummaryV1 } from "./DomainReportExecutionSummaryV1";
import { DomainReportExecutionSummaryV1FromJSON, DomainReportExecutionSummaryV1FromJSONTyped, DomainReportExecutionSummaryV1ToJSON } from "./DomainReportExecutionSummaryV1";

/**
 *
 * @export
 * @interface DomainScheduledReportV1
 */
export interface DomainScheduledReportV1 {
    /**
     *
     * @type {boolean}
     * @memberof DomainScheduledReportV1
     */
    canWrite?: boolean;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    createdOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    customerId: string;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    description: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    expirationOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    id: string;
    /**
     *
     * @type {DomainReportExecutionSummaryV1}
     * @memberof DomainScheduledReportV1
     */
    lastExecution?: DomainReportExecutionSummaryV1;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    lastUpdatedOn: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    name: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    nextExecutionOn?: Date;
    /**
     *
     * @type {Array<DomainNotifications>}
     * @memberof DomainScheduledReportV1
     */
    notifications: Array<DomainNotifications>;
    /**
     *
     * @type {boolean}
     * @memberof DomainScheduledReportV1
     */
    ownedByCs?: boolean;
    /**
     *
     * @type {DomainReportMetadata}
     * @memberof DomainScheduledReportV1
     */
    reportMetadata?: DomainReportMetadata;
    /**
     *
     * @type {DomainReportParams}
     * @memberof DomainScheduledReportV1
     */
    reportParams: DomainReportParams;
    /**
     *
     * @type {DomainSchedule}
     * @memberof DomainScheduledReportV1
     */
    schedule: DomainSchedule;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainScheduledReportV1
     */
    sharedWith: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    startOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    status: string;
    /**
     *
     * @type {Date}
     * @memberof DomainScheduledReportV1
     */
    stopOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    tracking?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    triggerReference?: string;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    type: string;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof DomainScheduledReportV1
     */
    userUuid: string;
}

/**
 * Check if a given object implements the DomainScheduledReportV1 interface.
 */
export function instanceOfDomainScheduledReportV1(value: object): value is DomainScheduledReportV1 {
    if (!("createdOn" in value) || value["createdOn"] === undefined) return false;
    if (!("customerId" in value) || value["customerId"] === undefined) return false;
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("lastUpdatedOn" in value) || value["lastUpdatedOn"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    if (!("notifications" in value) || value["notifications"] === undefined) return false;
    if (!("reportParams" in value) || value["reportParams"] === undefined) return false;
    if (!("schedule" in value) || value["schedule"] === undefined) return false;
    if (!("sharedWith" in value) || value["sharedWith"] === undefined) return false;
    if (!("status" in value) || value["status"] === undefined) return false;
    if (!("type" in value) || value["type"] === undefined) return false;
    if (!("userId" in value) || value["userId"] === undefined) return false;
    if (!("userUuid" in value) || value["userUuid"] === undefined) return false;
    return true;
}

export function DomainScheduledReportV1FromJSON(json: any): DomainScheduledReportV1 {
    return DomainScheduledReportV1FromJSONTyped(json, false);
}

export function DomainScheduledReportV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainScheduledReportV1 {
    if (json == null) {
        return json;
    }
    return {
        canWrite: json["can_write"] == null ? undefined : json["can_write"],
        createdOn: new Date(json["created_on"]),
        customerId: json["customer_id"],
        description: json["description"],
        expirationOn: json["expiration_on"] == null ? undefined : new Date(json["expiration_on"]),
        id: json["id"],
        lastExecution: json["last_execution"] == null ? undefined : DomainReportExecutionSummaryV1FromJSON(json["last_execution"]),
        lastUpdatedOn: new Date(json["last_updated_on"]),
        name: json["name"],
        nextExecutionOn: json["next_execution_on"] == null ? undefined : new Date(json["next_execution_on"]),
        notifications: (json["notifications"] as Array<any>).map(DomainNotificationsFromJSON),
        ownedByCs: json["owned_by_cs"] == null ? undefined : json["owned_by_cs"],
        reportMetadata: json["report_metadata"] == null ? undefined : DomainReportMetadataFromJSON(json["report_metadata"]),
        reportParams: DomainReportParamsFromJSON(json["report_params"]),
        schedule: DomainScheduleFromJSON(json["schedule"]),
        sharedWith: json["shared_with"],
        startOn: json["start_on"] == null ? undefined : new Date(json["start_on"]),
        status: json["status"],
        stopOn: json["stop_on"] == null ? undefined : new Date(json["stop_on"]),
        tracking: json["tracking"] == null ? undefined : json["tracking"],
        triggerReference: json["trigger_reference"] == null ? undefined : json["trigger_reference"],
        type: json["type"],
        userId: json["user_id"],
        userUuid: json["user_uuid"],
    };
}

export function DomainScheduledReportV1ToJSON(value?: DomainScheduledReportV1 | null): any {
    if (value == null) {
        return value;
    }
    return {
        can_write: value["canWrite"],
        created_on: value["createdOn"].toISOString(),
        customer_id: value["customerId"],
        description: value["description"],
        expiration_on: value["expirationOn"] == null ? undefined : value["expirationOn"].toISOString(),
        id: value["id"],
        last_execution: DomainReportExecutionSummaryV1ToJSON(value["lastExecution"]),
        last_updated_on: value["lastUpdatedOn"].toISOString(),
        name: value["name"],
        next_execution_on: value["nextExecutionOn"] == null ? undefined : value["nextExecutionOn"].toISOString(),
        notifications: (value["notifications"] as Array<any>).map(DomainNotificationsToJSON),
        owned_by_cs: value["ownedByCs"],
        report_metadata: DomainReportMetadataToJSON(value["reportMetadata"]),
        report_params: DomainReportParamsToJSON(value["reportParams"]),
        schedule: DomainScheduleToJSON(value["schedule"]),
        shared_with: value["sharedWith"],
        start_on: value["startOn"] == null ? undefined : value["startOn"].toISOString(),
        status: value["status"],
        stop_on: value["stopOn"] == null ? undefined : value["stopOn"].toISOString(),
        tracking: value["tracking"],
        trigger_reference: value["triggerReference"],
        type: value["type"],
        user_id: value["userId"],
        user_uuid: value["userUuid"],
    };
}
