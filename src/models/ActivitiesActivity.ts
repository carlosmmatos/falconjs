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
import type { ActivitiesActivityExtField } from "./ActivitiesActivityExtField";
import { ActivitiesActivityExtFieldFromJSON, ActivitiesActivityExtFieldFromJSONTyped, ActivitiesActivityExtFieldToJSON } from "./ActivitiesActivityExtField";
import type { JsonschemaSchema } from "./JsonschemaSchema";
import { JsonschemaSchemaFromJSON, JsonschemaSchemaFromJSONTyped, JsonschemaSchemaToJSON } from "./JsonschemaSchema";

/**
 *
 * @export
 * @interface ActivitiesActivity
 */
export interface ActivitiesActivity {
    /**
     * Required api scope to use this activity.
     * @type {string}
     * @memberof ActivitiesActivity
     */
    apiScope?: string;
    /**
     * Activity class to identify how it should be orchestrated. E.g. External, Break, CreateVariable and UpdateVariable
     * @type {string}
     * @memberof ActivitiesActivity
     */
    _class?: string;
    /**
     * A detailed description of what this action does
     * @type {string}
     * @memberof ActivitiesActivity
     */
    description: string;
    /**
     * A flag indicating whether the activity is potentially disruptive/destructive
     * @type {boolean}
     * @memberof ActivitiesActivity
     */
    disruptive: boolean;
    /**
     * Indicates whether an activity is available for the caller
     * @type {boolean}
     * @memberof ActivitiesActivity
     */
    hasPermission: boolean;
    /**
     * Unique ID of the activity, auto-generated by the API service
     * @type {string}
     * @memberof ActivitiesActivity
     */
    id: string;
    /**
     * Input fields required for configuring activity
     * @type {Array<ActivitiesActivityExtField>}
     * @memberof ActivitiesActivity
     */
    inputFields?: Array<ActivitiesActivityExtField>;
    /**
     *
     * @type {JsonschemaSchema}
     * @memberof ActivitiesActivity
     */
    inputSchema?: JsonschemaSchema;
    /**
     *
     * @type {object}
     * @memberof ActivitiesActivity
     */
    mockOutput?: object;
    /**
     * UI name for displaying the activity to a user
     * @type {string}
     * @memberof ActivitiesActivity
     */
    name: string;
    /**
     * Unique namespace for the activity.
     * @type {string}
     * @memberof ActivitiesActivity
     */
    namespace?: string;
    /**
     * Output fields of the activity once executed
     * @type {Array<ActivitiesActivityExtField>}
     * @memberof ActivitiesActivity
     */
    outputFields?: Array<ActivitiesActivityExtField>;
    /**
     *
     * @type {JsonschemaSchema}
     * @memberof ActivitiesActivity
     */
    outputSchema?: JsonschemaSchema;
    /**
     * Tag IDs assigned to this activity
     * @type {Array<string>}
     * @memberof ActivitiesActivity
     */
    tagIds?: Array<string>;
    /**
     * Timestamp of when the activity was last updated
     * @type {Date}
     * @memberof ActivitiesActivity
     */
    updated?: Date;
    /**
     * An incrementing version number
     * @type {number}
     * @memberof ActivitiesActivity
     */
    version?: number;
}

/**
 * Check if a given object implements the ActivitiesActivity interface.
 */
export function instanceOfActivitiesActivity(value: object): value is ActivitiesActivity {
    if (!("description" in value) || value["description"] === undefined) return false;
    if (!("disruptive" in value) || value["disruptive"] === undefined) return false;
    if (!("hasPermission" in value) || value["hasPermission"] === undefined) return false;
    if (!("id" in value) || value["id"] === undefined) return false;
    if (!("name" in value) || value["name"] === undefined) return false;
    return true;
}

export function ActivitiesActivityFromJSON(json: any): ActivitiesActivity {
    return ActivitiesActivityFromJSONTyped(json, false);
}

export function ActivitiesActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivitiesActivity {
    if (json == null) {
        return json;
    }
    return {
        apiScope: json["api_scope"] == null ? undefined : json["api_scope"],
        _class: json["class"] == null ? undefined : json["class"],
        description: json["description"],
        disruptive: json["disruptive"],
        hasPermission: json["has_permission"],
        id: json["id"],
        inputFields: json["input_fields"] == null ? undefined : (json["input_fields"] as Array<any>).map(ActivitiesActivityExtFieldFromJSON),
        inputSchema: json["input_schema"] == null ? undefined : JsonschemaSchemaFromJSON(json["input_schema"]),
        mockOutput: json["mock_output"] == null ? undefined : json["mock_output"],
        name: json["name"],
        namespace: json["namespace"] == null ? undefined : json["namespace"],
        outputFields: json["output_fields"] == null ? undefined : (json["output_fields"] as Array<any>).map(ActivitiesActivityExtFieldFromJSON),
        outputSchema: json["output_schema"] == null ? undefined : JsonschemaSchemaFromJSON(json["output_schema"]),
        tagIds: json["tag_ids"] == null ? undefined : json["tag_ids"],
        updated: json["updated"] == null ? undefined : new Date(json["updated"]),
        version: json["version"] == null ? undefined : json["version"],
    };
}

export function ActivitiesActivityToJSON(value?: ActivitiesActivity | null): any {
    if (value == null) {
        return value;
    }
    return {
        api_scope: value["apiScope"],
        class: value["_class"],
        description: value["description"],
        disruptive: value["disruptive"],
        has_permission: value["hasPermission"],
        id: value["id"],
        input_fields: value["inputFields"] == null ? undefined : (value["inputFields"] as Array<any>).map(ActivitiesActivityExtFieldToJSON),
        input_schema: JsonschemaSchemaToJSON(value["inputSchema"]),
        mock_output: value["mockOutput"],
        name: value["name"],
        namespace: value["namespace"],
        output_fields: value["outputFields"] == null ? undefined : (value["outputFields"] as Array<any>).map(ActivitiesActivityExtFieldToJSON),
        output_schema: JsonschemaSchemaToJSON(value["outputSchema"]),
        tag_ids: value["tagIds"],
        updated: value["updated"] == null ? undefined : value["updated"].toISOString(),
        version: value["version"],
    };
}
