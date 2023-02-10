/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
import type { DomainAPIEvaluationLogicComparisonsV1 } from "./DomainAPIEvaluationLogicComparisonsV1";
import {
    DomainAPIEvaluationLogicComparisonsV1FromJSON,
    DomainAPIEvaluationLogicComparisonsV1FromJSONTyped,
    DomainAPIEvaluationLogicComparisonsV1ToJSON,
} from "./DomainAPIEvaluationLogicComparisonsV1";

/**
 *
 * @export
 * @interface DomainAPIEvaluationLogicItemV1
 */
export interface DomainAPIEvaluationLogicItemV1 {
    /**
     *
     * @type {string}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    comparisonCheck?: string;
    /**
     *
     * @type {DomainAPIEvaluationLogicComparisonsV1}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    comparisons?: DomainAPIEvaluationLogicComparisonsV1;
    /**
     *
     * @type {boolean}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    determinedByComparison?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    existenceCheck?: string;
    /**
     *
     * @type {number}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    id?: number;
    /**
     *
     * @type {Array<object>}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    items?: Array<object>;
    /**
     *
     * @type {boolean}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    negate?: boolean;
    /**
     *
     * @type {string}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof DomainAPIEvaluationLogicItemV1
     */
    type: string;
}

/**
 * Check if a given object implements the DomainAPIEvaluationLogicItemV1 interface.
 */
export function instanceOfDomainAPIEvaluationLogicItemV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DomainAPIEvaluationLogicItemV1FromJSON(json: any): DomainAPIEvaluationLogicItemV1 {
    return DomainAPIEvaluationLogicItemV1FromJSONTyped(json, false);
}

export function DomainAPIEvaluationLogicItemV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainAPIEvaluationLogicItemV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        comparisonCheck: !exists(json, "comparison_check") ? undefined : json["comparison_check"],
        comparisons: !exists(json, "comparisons") ? undefined : DomainAPIEvaluationLogicComparisonsV1FromJSON(json["comparisons"]),
        determinedByComparison: !exists(json, "determined_by_comparison") ? undefined : json["determined_by_comparison"],
        existenceCheck: !exists(json, "existence_check") ? undefined : json["existence_check"],
        id: !exists(json, "id") ? undefined : json["id"],
        items: !exists(json, "items") ? undefined : json["items"],
        negate: !exists(json, "negate") ? undefined : json["negate"],
        title: json["title"],
        type: json["type"],
    };
}

export function DomainAPIEvaluationLogicItemV1ToJSON(value?: DomainAPIEvaluationLogicItemV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        comparison_check: value.comparisonCheck,
        comparisons: DomainAPIEvaluationLogicComparisonsV1ToJSON(value.comparisons),
        determined_by_comparison: value.determinedByComparison,
        existence_check: value.existenceCheck,
        id: value.id,
        items: value.items,
        negate: value.negate,
        title: value.title,
        type: value.type,
    };
}
