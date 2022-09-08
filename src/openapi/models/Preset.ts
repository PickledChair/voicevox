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
 * プリセット情報
 * @export
 * @interface Preset
 */
export interface Preset {
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof Preset
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Preset
     */
    speakerUuid: string;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    styleId: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    speedScale: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    pitchScale: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    intonationScale: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    volumeScale: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    prePhonemeLength: number;
    /**
     * 
     * @type {number}
     * @memberof Preset
     */
    postPhonemeLength: number;
}

export function PresetFromJSON(json: any): Preset {
    return PresetFromJSONTyped(json, false);
}

export function PresetFromJSONTyped(json: any, ignoreDiscriminator: boolean): Preset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'speakerUuid': json['speaker_uuid'],
        'styleId': json['style_id'],
        'speedScale': json['speedScale'],
        'pitchScale': json['pitchScale'],
        'intonationScale': json['intonationScale'],
        'volumeScale': json['volumeScale'],
        'prePhonemeLength': json['prePhonemeLength'],
        'postPhonemeLength': json['postPhonemeLength'],
    };
}

export function PresetToJSON(value?: Preset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'speaker_uuid': value.speakerUuid,
        'style_id': value.styleId,
        'speedScale': value.speedScale,
        'pitchScale': value.pitchScale,
        'intonationScale': value.intonationScale,
        'volumeScale': value.volumeScale,
        'prePhonemeLength': value.prePhonemeLength,
        'postPhonemeLength': value.postPhonemeLength,
    };
}

