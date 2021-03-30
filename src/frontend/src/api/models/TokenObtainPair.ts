/* tslint:disable */
/* eslint-disable */
/**
 * Purplship API
 *  ## API Reference  Purplship is an open source multi-carrier shipping API that simplifies the integration of logistic carrier services.  The Purplship API is organized around REST. Our API has predictable resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.  The Purplship API differs for every account as we release new versions. These docs are customized to your version of the API.   ## Versioning  When backwards-incompatible changes are made to the API, a new, dated version is released.  The current version is 2021.2.1.   Read our API changelog and to learn more about backwards compatibility.  As a precaution, use API versioning to check a new API version before committing to an upgrade. 
 *
 * The version of the OpenAPI document: v1-2021.2.1
 * Contact: hello@purplship.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TokenObtainPair
 */
export interface TokenObtainPair {
    /**
     * 
     * @type {string}
     * @memberof TokenObtainPair
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof TokenObtainPair
     */
    password: string;
}

export function TokenObtainPairFromJSON(json: any): TokenObtainPair {
    return TokenObtainPairFromJSONTyped(json, false);
}

export function TokenObtainPairFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenObtainPair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
    };
}

export function TokenObtainPairToJSON(value?: TokenObtainPair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
    };
}


