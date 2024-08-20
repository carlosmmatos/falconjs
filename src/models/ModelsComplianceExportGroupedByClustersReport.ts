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
 * @interface ModelsComplianceExportGroupedByClustersReport
 */
export interface ModelsComplianceExportGroupedByClustersReport {
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    cloudAccountId: string;
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    cloudProvider: string;
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    cloudRegion: string;
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    clusterName: string;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    failedCriticalRules: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    failedHighRules: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    failedRules: number;
    /**
     *
     * @type {string}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    failedRulesList: string;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    nonCompliantContainers: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    nonCompliantImages: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    passedRules: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    percentageOfCompliantAssets: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    totalContainers: number;
    /**
     *
     * @type {number}
     * @memberof ModelsComplianceExportGroupedByClustersReport
     */
    totalImages: number;
}

/**
 * Check if a given object implements the ModelsComplianceExportGroupedByClustersReport interface.
 */
export function instanceOfModelsComplianceExportGroupedByClustersReport(value: object): value is ModelsComplianceExportGroupedByClustersReport {
    if (!("cid" in value) || value["cid"] === undefined) return false;
    if (!("cloudAccountId" in value) || value["cloudAccountId"] === undefined) return false;
    if (!("cloudProvider" in value) || value["cloudProvider"] === undefined) return false;
    if (!("cloudRegion" in value) || value["cloudRegion"] === undefined) return false;
    if (!("clusterName" in value) || value["clusterName"] === undefined) return false;
    if (!("failedCriticalRules" in value) || value["failedCriticalRules"] === undefined) return false;
    if (!("failedHighRules" in value) || value["failedHighRules"] === undefined) return false;
    if (!("failedRules" in value) || value["failedRules"] === undefined) return false;
    if (!("failedRulesList" in value) || value["failedRulesList"] === undefined) return false;
    if (!("nonCompliantContainers" in value) || value["nonCompliantContainers"] === undefined) return false;
    if (!("nonCompliantImages" in value) || value["nonCompliantImages"] === undefined) return false;
    if (!("passedRules" in value) || value["passedRules"] === undefined) return false;
    if (!("percentageOfCompliantAssets" in value) || value["percentageOfCompliantAssets"] === undefined) return false;
    if (!("totalContainers" in value) || value["totalContainers"] === undefined) return false;
    if (!("totalImages" in value) || value["totalImages"] === undefined) return false;
    return true;
}

export function ModelsComplianceExportGroupedByClustersReportFromJSON(json: any): ModelsComplianceExportGroupedByClustersReport {
    return ModelsComplianceExportGroupedByClustersReportFromJSONTyped(json, false);
}

export function ModelsComplianceExportGroupedByClustersReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelsComplianceExportGroupedByClustersReport {
    if (json == null) {
        return json;
    }
    return {
        cid: json["cid"],
        cloudAccountId: json["cloud_account_id"],
        cloudProvider: json["cloud_provider"],
        cloudRegion: json["cloud_region"],
        clusterName: json["cluster_name"],
        failedCriticalRules: json["failed_critical_rules"],
        failedHighRules: json["failed_high_rules"],
        failedRules: json["failed_rules"],
        failedRulesList: json["failed_rules_list"],
        nonCompliantContainers: json["non_compliant_containers"],
        nonCompliantImages: json["non_compliant_images"],
        passedRules: json["passed_rules"],
        percentageOfCompliantAssets: json["percentage_of_compliant_assets"],
        totalContainers: json["total_containers"],
        totalImages: json["total_images"],
    };
}

export function ModelsComplianceExportGroupedByClustersReportToJSON(value?: ModelsComplianceExportGroupedByClustersReport | null): any {
    if (value == null) {
        return value;
    }
    return {
        cid: value["cid"],
        cloud_account_id: value["cloudAccountId"],
        cloud_provider: value["cloudProvider"],
        cloud_region: value["cloudRegion"],
        cluster_name: value["clusterName"],
        failed_critical_rules: value["failedCriticalRules"],
        failed_high_rules: value["failedHighRules"],
        failed_rules: value["failedRules"],
        failed_rules_list: value["failedRulesList"],
        non_compliant_containers: value["nonCompliantContainers"],
        non_compliant_images: value["nonCompliantImages"],
        passed_rules: value["passedRules"],
        percentage_of_compliant_assets: value["percentageOfCompliantAssets"],
        total_containers: value["totalContainers"],
        total_images: value["totalImages"],
    };
}
