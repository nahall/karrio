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
 * @interface CarrierSettings
 */
export interface CarrierSettings {
    /**
     * A unique address identifier
     * @type {string}
     * @memberof CarrierSettings
     */
    id: string;
    /**
     * Indicates a carrier (type)
     * @type {string}
     * @memberof CarrierSettings
     */
    carrier_name: CarrierSettingsCarrierNameEnum;
    /**
     * Indicates a specific carrier configuration name.
     * @type {string}
     * @memberof CarrierSettings
     */
    carrier_id: string;
    /**
     * 
     * The test flag indicates whether to use a carrier configured for test. 
     * @type {boolean}
     * @memberof CarrierSettings
     */
    test: boolean;
    /**
     * 
     * The active flag indicates whether the carrier account is active or not. 
     * @type {boolean}
     * @memberof CarrierSettings
     */
    active: boolean;
}

/**
* @export
* @enum {string}
*/
export enum CarrierSettingsCarrierNameEnum {
    Aramex = 'aramex',
    Australiapost = 'australiapost',
    Canadapost = 'canadapost',
    Canpar = 'canpar',
    DhlExpress = 'dhl_express',
    DhlUniversal = 'dhl_universal',
    Dicom = 'dicom',
    FedexExpress = 'fedex_express',
    PurolatorCourier = 'purolator_courier',
    Royalmail = 'royalmail',
    Sendle = 'sendle',
    SfExpress = 'sf_express',
    UpsPackage = 'ups_package',
    Usps = 'usps',
    Yanwen = 'yanwen',
    Yunexpress = 'yunexpress',
    Eshipper = 'eshipper',
    Freightcom = 'freightcom'
}

export function CarrierSettingsFromJSON(json: any): CarrierSettings {
    return CarrierSettingsFromJSONTyped(json, false);
}

export function CarrierSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CarrierSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'carrier_name': json['carrier_name'],
        'carrier_id': json['carrier_id'],
        'test': json['test'],
        'active': json['active'],
    };
}

export function CarrierSettingsToJSON(value?: CarrierSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'carrier_name': value.carrier_name,
        'carrier_id': value.carrier_id,
        'test': value.test,
        'active': value.active,
    };
}


