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
import type { StoreDomainAppLinks } from "./StoreDomainAppLinks";
import { StoreDomainAppLinksFromJSON, StoreDomainAppLinksFromJSONTyped, StoreDomainAppLinksToJSON } from "./StoreDomainAppLinks";
import type { StoreDomainManagedSoftwareResponse } from "./StoreDomainManagedSoftwareResponse";
import { StoreDomainManagedSoftwareResponseFromJSON, StoreDomainManagedSoftwareResponseFromJSONTyped, StoreDomainManagedSoftwareResponseToJSON } from "./StoreDomainManagedSoftwareResponse";
import type { StoreDomainOwnerDetailsV1 } from "./StoreDomainOwnerDetailsV1";
import { StoreDomainOwnerDetailsV1FromJSON, StoreDomainOwnerDetailsV1FromJSONTyped, StoreDomainOwnerDetailsV1ToJSON } from "./StoreDomainOwnerDetailsV1";
import type { StoreDomainScreenshotsV1 } from "./StoreDomainScreenshotsV1";
import { StoreDomainScreenshotsV1FromJSON, StoreDomainScreenshotsV1FromJSONTyped, StoreDomainScreenshotsV1ToJSON } from "./StoreDomainScreenshotsV1";
import type { StoreDomainVersionDetailsV1 } from "./StoreDomainVersionDetailsV1";
import { StoreDomainVersionDetailsV1FromJSON, StoreDomainVersionDetailsV1FromJSONTyped, StoreDomainVersionDetailsV1ToJSON } from "./StoreDomainVersionDetailsV1";

/**
 *
 * @export
 * @interface StoreDomainAppDetailsV1
 */
export interface StoreDomainAppDetailsV1 {
    /**
     *
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    activateWithDependencies?: Array<string>;
    /**
     * indicates whether this app is activated as a dependency for the given customer
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    activatedAsDependency: boolean;
    /**
     * name of sku, as defined in csam, that is associated with the app. Only returned when calling from admin ui.'
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    assignedSku?: string;
    /**
     * indicates whether the app is in beta mode. If so, it will only be visible to customers with the associated feature flag enabled.
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    beta: boolean;
    /**
     * list of categories associated to the app (i.e. UEBA, Vuln Mgmt, Deception, etc.)
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    categories?: Array<string>;
    /**
     * Indicates whether the app can be configured.
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    configurable: boolean;
    /**
     * indicates days remaining in trial until expiration. It should only be visible after the trial has started.
     * @type {number}
     * @memberof StoreDomainAppDetailsV1
     */
    daysRemaining?: number;
    /**
     * link to demo video for educational purposes
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    demoUrl?: string;
    /**
     * link to any partner provided documentation
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    docsUrl?: string;
    /**
     * link to the partner provided Data Processing Agreement (DPA)
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    dpaUrl?: string;
    /**
     * List of descriptive text for environment dependencies enabled for the app.
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    environmentRequirements?: Array<string>;
    /**
     * link to to the partner provided EULA
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    eulaUrl?: string;
    /**
     * to be rendered as bullet points in the UI. Specific call outs to key pieces of information about the app
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    features?: Array<string>;
    /**
     * list of handlers associated to the app. Only returned when calling from admin ui.
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    handlers?: Array<string>;
    /**
     * image for the app that is displayed in the marketplace listings/index page
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    heroImage?: string;
    /**
     * unique identifier for the app
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    id: string;
    /**
     * Use for the get more info button. Link to any partner provided URL for details on app.
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    infoUrl?: string;
    /**
     * an arbitrary label assigned to the app. This is used presentation purposes to display apps under categories such as; featured, informational, falcon apps, etc.
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    labels?: Array<string>;
    /**
     * the latest available version for the customer to upgrade to.
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    latestVersion?: string;
    /**
     * link to login to partner product. This is only populated after activation has been completed.
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    loginUrl?: string;
    /**
     * logo for the app
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    logo?: string;
    /**
     * List of skus that the app requires which the user is not currently subscribed to.
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    missingSkus?: Array<string>;
    /**
     * display name of the app
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    name?: string;
    /**
     * list of pre-requisite Falcon modules that are optional for this app
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    optionalSkus?: Array<string>;
    /**
     * detailed description and overview of the partner company and product
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    overview: string;
    /**
     *
     * @type {StoreDomainOwnerDetailsV1}
     * @memberof StoreDomainAppDetailsV1
     */
    owner: StoreDomainOwnerDetailsV1;
    /**
     *
     * @type {number}
     * @memberof StoreDomainAppDetailsV1
     */
    pendingTrialExpirationOverrideDays?: number;
    /**
     * list of OS platforms the app supports
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    platforms?: Array<string>;
    /**
     * a link or email address customers can contact for pricing inquiries
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    pricing?: string;
    /**
     * link to the partner provided privacy agreement
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    privacyUrl?: string;
    /**
     * list of pre-requisite Falcon modules that are required for this app to function
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    requiredSkus?: Array<string>;
    /**
     * provides additional links to resources related to the app
     * @type {Array<StoreDomainAppLinks>}
     * @memberof StoreDomainAppDetailsV1
     */
    resourceLinks?: Array<StoreDomainAppLinks>;
    /**
     * relative S3 path to screenshots of the app and associated alt text
     * @type {Array<StoreDomainScreenshotsV1>}
     * @memberof StoreDomainAppDetailsV1
     */
    screenshots?: Array<StoreDomainScreenshotsV1>;
    /**
     * OR operator set (true/false) to indicate that only one of skus are required
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    skuRequirementOrOperatorSet: boolean;
    /**
     *
     * @type {StoreDomainManagedSoftwareResponse}
     * @memberof StoreDomainAppDetailsV1
     */
    software?: StoreDomainManagedSoftwareResponse;
    /**
     * state of the app for the given customer. Is empty this should default to AVAILABLE in the UI
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    state?: string;
    /**
     * high level summary used as a tag line
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    summary: string;
    /**
     * list of supported clouds. This is used to filter the app listing to available apps per cloud.
     * @type {Array<string>}
     * @memberof StoreDomainAppDetailsV1
     */
    supportedClouds?: Array<string>;
    /**
     * indicates whether the app can be activated or not. Informational apps cannot be.
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    trialReady: boolean;
    /**
     * indicates whether the latest version is greater than the current version meaning a version upgrade is available.
     * @type {boolean}
     * @memberof StoreDomainAppDetailsV1
     */
    upgradeAvailable: boolean;
    /**
     * a description that speaks specifically to the integration use cases between the partner product and Falcon
     * @type {string}
     * @memberof StoreDomainAppDetailsV1
     */
    usecases?: string;
    /**
     *
     * @type {StoreDomainVersionDetailsV1}
     * @memberof StoreDomainAppDetailsV1
     */
    version?: StoreDomainVersionDetailsV1;
}

/**
 * Check if a given object implements the StoreDomainAppDetailsV1 interface.
 */
export function instanceOfStoreDomainAppDetailsV1(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "activatedAsDependency" in value;
    isInstance = isInstance && "beta" in value;
    isInstance = isInstance && "configurable" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "overview" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "skuRequirementOrOperatorSet" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "trialReady" in value;
    isInstance = isInstance && "upgradeAvailable" in value;

    return isInstance;
}

export function StoreDomainAppDetailsV1FromJSON(json: any): StoreDomainAppDetailsV1 {
    return StoreDomainAppDetailsV1FromJSONTyped(json, false);
}

export function StoreDomainAppDetailsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreDomainAppDetailsV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        activateWithDependencies: !exists(json, "activate_with_dependencies") ? undefined : json["activate_with_dependencies"],
        activatedAsDependency: json["activated_as_dependency"],
        assignedSku: !exists(json, "assigned_sku") ? undefined : json["assigned_sku"],
        beta: json["beta"],
        categories: !exists(json, "categories") ? undefined : json["categories"],
        configurable: json["configurable"],
        daysRemaining: !exists(json, "days_remaining") ? undefined : json["days_remaining"],
        demoUrl: !exists(json, "demo_url") ? undefined : json["demo_url"],
        docsUrl: !exists(json, "docs_url") ? undefined : json["docs_url"],
        dpaUrl: !exists(json, "dpa_url") ? undefined : json["dpa_url"],
        environmentRequirements: !exists(json, "environment_requirements") ? undefined : json["environment_requirements"],
        eulaUrl: !exists(json, "eula_url") ? undefined : json["eula_url"],
        features: !exists(json, "features") ? undefined : json["features"],
        handlers: !exists(json, "handlers") ? undefined : json["handlers"],
        heroImage: !exists(json, "hero_image") ? undefined : json["hero_image"],
        id: json["id"],
        infoUrl: !exists(json, "info_url") ? undefined : json["info_url"],
        labels: !exists(json, "labels") ? undefined : json["labels"],
        latestVersion: !exists(json, "latest_version") ? undefined : json["latest_version"],
        loginUrl: !exists(json, "login_url") ? undefined : json["login_url"],
        logo: !exists(json, "logo") ? undefined : json["logo"],
        missingSkus: !exists(json, "missing_skus") ? undefined : json["missing_skus"],
        name: !exists(json, "name") ? undefined : json["name"],
        optionalSkus: !exists(json, "optional_skus") ? undefined : json["optional_skus"],
        overview: json["overview"],
        owner: StoreDomainOwnerDetailsV1FromJSON(json["owner"]),
        pendingTrialExpirationOverrideDays: !exists(json, "pending_trial_expiration_override_days") ? undefined : json["pending_trial_expiration_override_days"],
        platforms: !exists(json, "platforms") ? undefined : json["platforms"],
        pricing: !exists(json, "pricing") ? undefined : json["pricing"],
        privacyUrl: !exists(json, "privacy_url") ? undefined : json["privacy_url"],
        requiredSkus: !exists(json, "required_skus") ? undefined : json["required_skus"],
        resourceLinks: !exists(json, "resource_links") ? undefined : (json["resource_links"] as Array<any>).map(StoreDomainAppLinksFromJSON),
        screenshots: !exists(json, "screenshots") ? undefined : (json["screenshots"] as Array<any>).map(StoreDomainScreenshotsV1FromJSON),
        skuRequirementOrOperatorSet: json["sku_requirement_or_operator_set"],
        software: !exists(json, "software") ? undefined : StoreDomainManagedSoftwareResponseFromJSON(json["software"]),
        state: !exists(json, "state") ? undefined : json["state"],
        summary: json["summary"],
        supportedClouds: !exists(json, "supported_clouds") ? undefined : json["supported_clouds"],
        trialReady: json["trial_ready"],
        upgradeAvailable: json["upgrade_available"],
        usecases: !exists(json, "usecases") ? undefined : json["usecases"],
        version: !exists(json, "version") ? undefined : StoreDomainVersionDetailsV1FromJSON(json["version"]),
    };
}

export function StoreDomainAppDetailsV1ToJSON(value?: StoreDomainAppDetailsV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        activate_with_dependencies: value.activateWithDependencies,
        activated_as_dependency: value.activatedAsDependency,
        assigned_sku: value.assignedSku,
        beta: value.beta,
        categories: value.categories,
        configurable: value.configurable,
        days_remaining: value.daysRemaining,
        demo_url: value.demoUrl,
        docs_url: value.docsUrl,
        dpa_url: value.dpaUrl,
        environment_requirements: value.environmentRequirements,
        eula_url: value.eulaUrl,
        features: value.features,
        handlers: value.handlers,
        hero_image: value.heroImage,
        id: value.id,
        info_url: value.infoUrl,
        labels: value.labels,
        latest_version: value.latestVersion,
        login_url: value.loginUrl,
        logo: value.logo,
        missing_skus: value.missingSkus,
        name: value.name,
        optional_skus: value.optionalSkus,
        overview: value.overview,
        owner: StoreDomainOwnerDetailsV1ToJSON(value.owner),
        pending_trial_expiration_override_days: value.pendingTrialExpirationOverrideDays,
        platforms: value.platforms,
        pricing: value.pricing,
        privacy_url: value.privacyUrl,
        required_skus: value.requiredSkus,
        resource_links: value.resourceLinks === undefined ? undefined : (value.resourceLinks as Array<any>).map(StoreDomainAppLinksToJSON),
        screenshots: value.screenshots === undefined ? undefined : (value.screenshots as Array<any>).map(StoreDomainScreenshotsV1ToJSON),
        sku_requirement_or_operator_set: value.skuRequirementOrOperatorSet,
        software: StoreDomainManagedSoftwareResponseToJSON(value.software),
        state: value.state,
        summary: value.summary,
        supported_clouds: value.supportedClouds,
        trial_ready: value.trialReady,
        upgrade_available: value.upgradeAvailable,
        usecases: value.usecases,
        version: StoreDomainVersionDetailsV1ToJSON(value.version),
    };
}
