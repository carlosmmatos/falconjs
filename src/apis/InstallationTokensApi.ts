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

import * as runtime from "../runtime";
import type {
    ApiAuditEventDetailsResponseV1,
    ApiCustomerSettingsResponseV1,
    ApiTokenCreateRequestV1,
    ApiTokenDetailsResponseV1,
    ApiTokenPatchRequestV1,
    MsaReplyMetaOnly,
    MsaspecQueryResponse,
    MsaspecResponseFields,
} from "../models/index";
import {
    ApiAuditEventDetailsResponseV1FromJSON,
    ApiAuditEventDetailsResponseV1ToJSON,
    ApiCustomerSettingsResponseV1FromJSON,
    ApiCustomerSettingsResponseV1ToJSON,
    ApiTokenCreateRequestV1FromJSON,
    ApiTokenCreateRequestV1ToJSON,
    ApiTokenDetailsResponseV1FromJSON,
    ApiTokenDetailsResponseV1ToJSON,
    ApiTokenPatchRequestV1FromJSON,
    ApiTokenPatchRequestV1ToJSON,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    MsaspecQueryResponseFromJSON,
    MsaspecQueryResponseToJSON,
    MsaspecResponseFieldsFromJSON,
    MsaspecResponseFieldsToJSON,
} from "../models/index";

export interface InstallationTokensApiAuditEventsQueryRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface InstallationTokensApiAuditEventsReadRequest {
    ids?: Array<string>;
}

export interface InstallationTokensApiTokensCreateRequest {
    body: ApiTokenCreateRequestV1;
}

export interface InstallationTokensApiTokensDeleteRequest {
    ids: Array<string>;
}

export interface InstallationTokensApiTokensQueryRequest {
    offset?: number;
    limit?: number;
    sort?: string;
    filter?: string;
}

export interface InstallationTokensApiTokensReadRequest {
    ids?: Array<string>;
}

export interface InstallationTokensApiTokensUpdateRequest {
    ids: Array<string>;
    body: ApiTokenPatchRequestV1;
}

/**
 *
 */
export class InstallationTokensApi extends runtime.BaseAPI {
    /**
     * Search for audit events by providing an FQL filter and paging details.
     */
    async auditEventsQueryRaw(
        requestParameters: InstallationTokensApiAuditEventsQueryRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/queries/audit-events/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for audit events by providing an FQL filter and paging details.
     */
    async auditEventsQuery(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.auditEventsQueryRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Gets the details of one or more audit events by id.
     */
    async auditEventsReadRaw(
        requestParameters: InstallationTokensApiAuditEventsReadRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ApiAuditEventDetailsResponseV1>> {
        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/audit-events/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiAuditEventDetailsResponseV1FromJSON(jsonValue));
    }

    /**
     * Gets the details of one or more audit events by id.
     */
    async auditEventsRead(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiAuditEventDetailsResponseV1> {
        const response = await this.auditEventsReadRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Check current installation token settings.
     */
    async customerSettingsReadRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApiCustomerSettingsResponseV1>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/customer-settings/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiCustomerSettingsResponseV1FromJSON(jsonValue));
    }

    /**
     * Check current installation token settings.
     */
    async customerSettingsRead(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiCustomerSettingsResponseV1> {
        const response = await this.customerSettingsReadRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates a token.
     */
    async tokensCreateRaw(
        requestParameters: InstallationTokensApiTokensCreateRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ApiTokenDetailsResponseV1>> {
        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling tokensCreate().');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/tokens/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: ApiTokenCreateRequestV1ToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiTokenDetailsResponseV1FromJSON(jsonValue));
    }

    /**
     * Creates a token.
     */
    async tokensCreate(body: ApiTokenCreateRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiTokenDetailsResponseV1> {
        const response = await this.tokensCreateRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Deletes a token immediately. To revoke a token, use PATCH /installation-tokens/entities/tokens/v1 instead.
     */
    async tokensDeleteRaw(
        requestParameters: InstallationTokensApiTokensDeleteRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<MsaspecResponseFields>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling tokensDelete().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"]!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/tokens/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecResponseFieldsFromJSON(jsonValue));
    }

    /**
     * Deletes a token immediately. To revoke a token, use PATCH /installation-tokens/entities/tokens/v1 instead.
     */
    async tokensDelete(ids: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecResponseFields> {
        const response = await this.tokensDeleteRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Search for tokens by providing an FQL filter and paging details.
     */
    async tokensQueryRaw(requestParameters: InstallationTokensApiTokensQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters["offset"] != null) {
            queryParameters["offset"] = requestParameters["offset"];
        }

        if (requestParameters["limit"] != null) {
            queryParameters["limit"] = requestParameters["limit"];
        }

        if (requestParameters["sort"] != null) {
            queryParameters["sort"] = requestParameters["sort"];
        }

        if (requestParameters["filter"] != null) {
            queryParameters["filter"] = requestParameters["filter"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/queries/tokens/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for tokens by providing an FQL filter and paging details.
     */
    async tokensQuery(offset?: number, limit?: number, sort?: string, filter?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.tokensQueryRaw({ offset: offset, limit: limit, sort: sort, filter: filter }, initOverrides);
        return await response.value();
    }

    /**
     * Gets the details of one or more tokens by id.
     */
    async tokensReadRaw(
        requestParameters: InstallationTokensApiTokensReadRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<ApiTokenDetailsResponseV1>> {
        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/tokens/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiTokenDetailsResponseV1FromJSON(jsonValue));
    }

    /**
     * Gets the details of one or more tokens by id.
     */
    async tokensRead(ids?: Array<string>, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApiTokenDetailsResponseV1> {
        const response = await this.tokensReadRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Updates one or more tokens. Use this endpoint to edit labels, change expiration, revoke, or restore.
     */
    async tokensUpdateRaw(requestParameters: InstallationTokensApiTokensUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MsaspecQueryResponse>> {
        if (requestParameters["ids"] == null) {
            throw new runtime.RequiredError("ids", 'Required parameter "ids" was null or undefined when calling tokensUpdate().');
        }

        if (requestParameters["body"] == null) {
            throw new runtime.RequiredError("body", 'Required parameter "body" was null or undefined when calling tokensUpdate().');
        }

        const queryParameters: any = {};

        if (requestParameters["ids"] != null) {
            queryParameters["ids"] = requestParameters["ids"]!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request(
            {
                path: `/installation-tokens/entities/tokens/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: ApiTokenPatchRequestV1ToJSON(requestParameters["body"]),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaspecQueryResponseFromJSON(jsonValue));
    }

    /**
     * Updates one or more tokens. Use this endpoint to edit labels, change expiration, revoke, or restore.
     */
    async tokensUpdate(ids: Array<string>, body: ApiTokenPatchRequestV1, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MsaspecQueryResponse> {
        const response = await this.tokensUpdateRaw({ ids: ids, body: body }, initOverrides);
        return await response.value();
    }
}
