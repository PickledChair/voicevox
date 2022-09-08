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
 * スピーカーのスタイル情報
 * @export
 * @interface SpeakerStyle
 */
export interface SpeakerStyle {
    /**
     * 
     * @type {string}
     * @memberof SpeakerStyle
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof SpeakerStyle
     */
    id: number;
}

export function SpeakerStyleFromJSON(json: any): SpeakerStyle {
    return SpeakerStyleFromJSONTyped(json, false);
}

export function SpeakerStyleFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpeakerStyle {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'id': json['id'],
    };
}

export function SpeakerStyleToJSON(value?: SpeakerStyle | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
    };
}

