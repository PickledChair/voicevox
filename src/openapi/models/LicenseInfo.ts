/* tslint:disable */
/* eslint-disable */
/**
 * SHAREVOX ENGINE
 * SHAREVOXの音声合成エンジンです。
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 依存ライブラリのライセンス情報
 * @export
 * @interface LicenseInfo
 */
export interface LicenseInfo {
    /**
     * 
     * @type {string}
     * @memberof LicenseInfo
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseInfo
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseInfo
     */
    license?: string;
    /**
     * 
     * @type {string}
     * @memberof LicenseInfo
     */
    text: string;
}

export function LicenseInfoFromJSON(json: any): LicenseInfo {
    return LicenseInfoFromJSONTyped(json, false);
}

export function LicenseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LicenseInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'license': !exists(json, 'license') ? undefined : json['license'],
        'text': json['text'],
    };
}

export function LicenseInfoToJSON(value?: LicenseInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'version': value.version,
        'license': value.license,
        'text': value.text,
    };
}

