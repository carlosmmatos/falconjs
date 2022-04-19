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

import * as runtime from "../runtime";
import {
    MsaEntityActionRequestV2,
    MsaEntityActionRequestV2FromJSON,
    MsaEntityActionRequestV2ToJSON,
    MsaErrorsOnly,
    MsaErrorsOnlyFromJSON,
    MsaErrorsOnlyToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
    RequestsCreateDeviceControlPoliciesV1,
    RequestsCreateDeviceControlPoliciesV1FromJSON,
    RequestsCreateDeviceControlPoliciesV1ToJSON,
    RequestsSetPolicyPrecedenceReqV1,
    RequestsSetPolicyPrecedenceReqV1FromJSON,
    RequestsSetPolicyPrecedenceReqV1ToJSON,
    RequestsUpdateDeviceControlPoliciesV1,
    RequestsUpdateDeviceControlPoliciesV1FromJSON,
    RequestsUpdateDeviceControlPoliciesV1ToJSON,
    ResponsesDeviceControlPoliciesV1,
    ResponsesDeviceControlPoliciesV1FromJSON,
    ResponsesDeviceControlPoliciesV1ToJSON,
    ResponsesPolicyMembersRespV1,
    ResponsesPolicyMembersRespV1FromJSON,
    ResponsesPolicyMembersRespV1ToJSON,
} from "../models";

export interface CreateDeviceControlPoliciesRequest {
    body: RequestsCreateDeviceControlPoliciesV1;
}

export interface DeleteDeviceControlPoliciesRequest {
    ids: Array<string>;
}

export interface GetDeviceControlPoliciesRequest {
    ids: Array<string>;
}

export interface PerformDeviceControlPoliciesActionRequest {
    actionName: PerformDeviceControlPoliciesActionActionNameEnum;
    body: MsaEntityActionRequestV2;
}

export interface QueryCombinedDeviceControlPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryCombinedDeviceControlPoliciesSortEnum;
}

export interface QueryCombinedDeviceControlPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface QueryDeviceControlPoliciesRequest {
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: QueryDeviceControlPoliciesSortEnum;
}

export interface QueryDeviceControlPolicyMembersRequest {
    id?: string;
    filter?: string;
    offset?: number;
    limit?: number;
    sort?: string;
}

export interface SetDeviceControlPoliciesPrecedenceRequest {
    body: RequestsSetPolicyPrecedenceReqV1;
}

export interface UpdateDeviceControlPoliciesRequest {
    body: RequestsUpdateDeviceControlPoliciesV1;
}

/**
 *
 */
export class DeviceControlPoliciesApi extends runtime.BaseAPI {
    /**
     * Create Device Control Policies by specifying details about the policy to create
     */
    async createDeviceControlPoliciesRaw(requestParameters: CreateDeviceControlPoliciesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesDeviceControlPoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling createDeviceControlPolicies.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsCreateDeviceControlPoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesDeviceControlPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Create Device Control Policies by specifying details about the policy to create
     */
    async createDeviceControlPolicies(body: RequestsCreateDeviceControlPoliciesV1, initOverrides?: RequestInit): Promise<ResponsesDeviceControlPoliciesV1> {
        const response = await this.createDeviceControlPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete a set of Device Control Policies by specifying their IDs
     */
    async deleteDeviceControlPoliciesRaw(requestParameters: DeleteDeviceControlPoliciesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling deleteDeviceControlPolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control/v1`,
                method: "DELETE",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Delete a set of Device Control Policies by specifying their IDs
     */
    async deleteDeviceControlPolicies(ids: Array<string>, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.deleteDeviceControlPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a set of Device Control Policies by specifying their IDs
     */
    async getDeviceControlPoliciesRaw(requestParameters: GetDeviceControlPoliciesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesDeviceControlPoliciesV1>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError("ids", "Required parameter requestParameters.ids was null or undefined when calling getDeviceControlPolicies.");
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters["ids"] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesDeviceControlPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Retrieve a set of Device Control Policies by specifying their IDs
     */
    async getDeviceControlPolicies(ids: Array<string>, initOverrides?: RequestInit): Promise<ResponsesDeviceControlPoliciesV1> {
        const response = await this.getDeviceControlPoliciesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Perform the specified action on the Device Control Policies specified in the request
     */
    async performDeviceControlPoliciesActionRaw(
        requestParameters: PerformDeviceControlPoliciesActionRequest,
        initOverrides?: RequestInit
    ): Promise<runtime.ApiResponse<ResponsesDeviceControlPoliciesV1>> {
        if (requestParameters.actionName === null || requestParameters.actionName === undefined) {
            throw new runtime.RequiredError("actionName", "Required parameter requestParameters.actionName was null or undefined when calling performDeviceControlPoliciesAction.");
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling performDeviceControlPoliciesAction.");
        }

        const queryParameters: any = {};

        if (requestParameters.actionName !== undefined) {
            queryParameters["action_name"] = requestParameters.actionName;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control-actions/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: MsaEntityActionRequestV2ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesDeviceControlPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Perform the specified action on the Device Control Policies specified in the request
     */
    async performDeviceControlPoliciesAction(
        actionName: PerformDeviceControlPoliciesActionActionNameEnum,
        body: MsaEntityActionRequestV2,
        initOverrides?: RequestInit
    ): Promise<ResponsesDeviceControlPoliciesV1> {
        const response = await this.performDeviceControlPoliciesActionRaw({ actionName: actionName, body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policies which match the filter criteria
     */
    async queryCombinedDeviceControlPoliciesRaw(
        requestParameters: QueryCombinedDeviceControlPoliciesRequest,
        initOverrides?: RequestInit
    ): Promise<runtime.ApiResponse<ResponsesDeviceControlPoliciesV1>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesDeviceControlPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policies which match the filter criteria
     */
    async queryCombinedDeviceControlPolicies(
        filter?: string,
        offset?: number,
        limit?: number,
        sort?: QueryCombinedDeviceControlPoliciesSortEnum,
        initOverrides?: RequestInit
    ): Promise<ResponsesDeviceControlPoliciesV1> {
        const response = await this.queryCombinedDeviceControlPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedDeviceControlPolicyMembersRaw(
        requestParameters: QueryCombinedDeviceControlPolicyMembersRequest,
        initOverrides?: RequestInit
    ): Promise<runtime.ApiResponse<ResponsesPolicyMembersRespV1>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/combined/device-control-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesPolicyMembersRespV1FromJSON(jsonValue));
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria
     */
    async queryCombinedDeviceControlPolicyMembers(id?: string, filter?: string, offset?: number, limit?: number, sort?: string, initOverrides?: RequestInit): Promise<ResponsesPolicyMembersRespV1> {
        const response = await this.queryCombinedDeviceControlPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policy IDs which match the filter criteria
     */
    async queryDeviceControlPoliciesRaw(requestParameters: QueryDeviceControlPoliciesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/device-control/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policy IDs which match the filter criteria
     */
    async queryDeviceControlPolicies(filter?: string, offset?: number, limit?: number, sort?: QueryDeviceControlPoliciesSortEnum, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryDeviceControlPoliciesRaw({ filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryDeviceControlPolicyMembersRaw(requestParameters: QueryDeviceControlPolicyMembersRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters["id"] = requestParameters.id;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters["filter"] = requestParameters.filter;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters["offset"] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters["limit"] = requestParameters.limit;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters["sort"] = requestParameters.sort;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:read"]);
        }

        const response = await this.request(
            {
                path: `/policy/queries/device-control-members/v1`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria
     */
    async queryDeviceControlPolicyMembers(id?: string, filter?: string, offset?: number, limit?: number, sort?: string, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryDeviceControlPolicyMembersRaw({ id: id, filter: filter, offset: offset, limit: limit, sort: sort }, initOverrides);
        return await response.value();
    }

    /**
     * Sets the precedence of Device Control Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setDeviceControlPoliciesPrecedenceRaw(requestParameters: SetDeviceControlPoliciesPrecedenceRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling setDeviceControlPoliciesPrecedence.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control-precedence/v1`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsSetPolicyPrecedenceReqV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Sets the precedence of Device Control Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence
     */
    async setDeviceControlPoliciesPrecedence(body: RequestsSetPolicyPrecedenceReqV1, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.setDeviceControlPoliciesPrecedenceRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update Device Control Policies by specifying the ID of the policy and details to update
     */
    async updateDeviceControlPoliciesRaw(requestParameters: UpdateDeviceControlPoliciesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponsesDeviceControlPoliciesV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError("body", "Required parameter requestParameters.body was null or undefined when calling updateDeviceControlPolicies.");
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["device-control-policies:write"]);
        }

        const response = await this.request(
            {
                path: `/policy/entities/device-control/v1`,
                method: "PATCH",
                headers: headerParameters,
                query: queryParameters,
                body: RequestsUpdateDeviceControlPoliciesV1ToJSON(requestParameters.body),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponsesDeviceControlPoliciesV1FromJSON(jsonValue));
    }

    /**
     * Update Device Control Policies by specifying the ID of the policy and details to update
     */
    async updateDeviceControlPolicies(body: RequestsUpdateDeviceControlPoliciesV1, initOverrides?: RequestInit): Promise<ResponsesDeviceControlPoliciesV1> {
        const response = await this.updateDeviceControlPoliciesRaw({ body: body }, initOverrides);
        return await response.value();
    }
}

/**
 * @export
 */
export const PerformDeviceControlPoliciesActionActionNameEnum = {
    AddHostGroup: "add-host-group",
    Disable: "disable",
    Enable: "enable",
    RemoveHostGroup: "remove-host-group",
} as const;
export type PerformDeviceControlPoliciesActionActionNameEnum = typeof PerformDeviceControlPoliciesActionActionNameEnum[keyof typeof PerformDeviceControlPoliciesActionActionNameEnum];
/**
 * @export
 */
export const QueryCombinedDeviceControlPoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryCombinedDeviceControlPoliciesSortEnum = typeof QueryCombinedDeviceControlPoliciesSortEnum[keyof typeof QueryCombinedDeviceControlPoliciesSortEnum];
/**
 * @export
 */
export const QueryDeviceControlPoliciesSortEnum = {
    CreatedByAsc: "created_by.asc",
    CreatedByDesc: "created_by.desc",
    CreatedTimestampAsc: "created_timestamp.asc",
    CreatedTimestampDesc: "created_timestamp.desc",
    EnabledAsc: "enabled.asc",
    EnabledDesc: "enabled.desc",
    ModifiedByAsc: "modified_by.asc",
    ModifiedByDesc: "modified_by.desc",
    ModifiedTimestampAsc: "modified_timestamp.asc",
    ModifiedTimestampDesc: "modified_timestamp.desc",
    NameAsc: "name.asc",
    NameDesc: "name.desc",
    PlatformNameAsc: "platform_name.asc",
    PlatformNameDesc: "platform_name.desc",
    PrecedenceAsc: "precedence.asc",
    PrecedenceDesc: "precedence.desc",
} as const;
export type QueryDeviceControlPoliciesSortEnum = typeof QueryDeviceControlPoliciesSortEnum[keyof typeof QueryDeviceControlPoliciesSortEnum];
