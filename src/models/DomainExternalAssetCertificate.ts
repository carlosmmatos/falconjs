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
import type { DomainExternalAssetCertificateEntityIdentifiers } from "./DomainExternalAssetCertificateEntityIdentifiers";
import {
    DomainExternalAssetCertificateEntityIdentifiersFromJSON,
    DomainExternalAssetCertificateEntityIdentifiersFromJSONTyped,
    DomainExternalAssetCertificateEntityIdentifiersToJSON,
} from "./DomainExternalAssetCertificateEntityIdentifiers";

/**
 *
 * @export
 * @interface DomainExternalAssetCertificate
 */
export interface DomainExternalAssetCertificate {
    /**
     *
     * @type {Array<object>}
     * @memberof DomainExternalAssetCertificate
     */
    ciphers?: Array<object>;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificate
     */
    fingerprintSha256?: string;
    /**
     *
     * @type {DomainExternalAssetCertificateEntityIdentifiers}
     * @memberof DomainExternalAssetCertificate
     */
    issuer?: DomainExternalAssetCertificateEntityIdentifiers;
    /**
     *
     * @type {number}
     * @memberof DomainExternalAssetCertificate
     */
    pubkeyBits?: number;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificate
     */
    pubkeyType?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificate
     */
    serial?: string;
    /**
     *
     * @type {string}
     * @memberof DomainExternalAssetCertificate
     */
    signatureAlgorithm?: string;
    /**
     *
     * @type {DomainExternalAssetCertificateEntityIdentifiers}
     * @memberof DomainExternalAssetCertificate
     */
    subject?: DomainExternalAssetCertificateEntityIdentifiers;
    /**
     *
     * @type {Date}
     * @memberof DomainExternalAssetCertificate
     */
    validFrom?: Date;
    /**
     *
     * @type {Date}
     * @memberof DomainExternalAssetCertificate
     */
    validTo?: Date;
}

/**
 * Check if a given object implements the DomainExternalAssetCertificate interface.
 */
export function instanceOfDomainExternalAssetCertificate(value: object): value is DomainExternalAssetCertificate {
    return true;
}

export function DomainExternalAssetCertificateFromJSON(json: any): DomainExternalAssetCertificate {
    return DomainExternalAssetCertificateFromJSONTyped(json, false);
}

export function DomainExternalAssetCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainExternalAssetCertificate {
    if (json == null) {
        return json;
    }
    return {
        ciphers: json["ciphers"] == null ? undefined : json["ciphers"],
        fingerprintSha256: json["fingerprint_sha256"] == null ? undefined : json["fingerprint_sha256"],
        issuer: json["issuer"] == null ? undefined : DomainExternalAssetCertificateEntityIdentifiersFromJSON(json["issuer"]),
        pubkeyBits: json["pubkey_bits"] == null ? undefined : json["pubkey_bits"],
        pubkeyType: json["pubkey_type"] == null ? undefined : json["pubkey_type"],
        serial: json["serial"] == null ? undefined : json["serial"],
        signatureAlgorithm: json["signature_algorithm"] == null ? undefined : json["signature_algorithm"],
        subject: json["subject"] == null ? undefined : DomainExternalAssetCertificateEntityIdentifiersFromJSON(json["subject"]),
        validFrom: json["valid_from"] == null ? undefined : new Date(json["valid_from"]),
        validTo: json["valid_to"] == null ? undefined : new Date(json["valid_to"]),
    };
}

export function DomainExternalAssetCertificateToJSON(value?: DomainExternalAssetCertificate | null): any {
    if (value == null) {
        return value;
    }
    return {
        ciphers: value["ciphers"],
        fingerprint_sha256: value["fingerprintSha256"],
        issuer: DomainExternalAssetCertificateEntityIdentifiersToJSON(value["issuer"]),
        pubkey_bits: value["pubkeyBits"],
        pubkey_type: value["pubkeyType"],
        serial: value["serial"],
        signature_algorithm: value["signatureAlgorithm"],
        subject: DomainExternalAssetCertificateEntityIdentifiersToJSON(value["subject"]),
        valid_from: value["validFrom"] == null ? undefined : value["validFrom"].toISOString(),
        valid_to: value["validTo"] == null ? undefined : value["validTo"].toISOString(),
    };
}
