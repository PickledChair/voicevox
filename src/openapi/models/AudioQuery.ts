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
import {
    AccentPhrase,
    AccentPhraseFromJSON,
    AccentPhraseFromJSONTyped,
    AccentPhraseToJSON,
} from './';

/**
 * 音声合成用のクエリ
 * @export
 * @interface AudioQuery
 */
export interface AudioQuery {
    /**
     * 
     * @type {Array<AccentPhrase>}
     * @memberof AudioQuery
     */
    accentPhrases: Array<AccentPhrase>;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    speedScale: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    pitchScale: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    intonationScale: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    volumeScale: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    prePhonemeLength: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    postPhonemeLength: number;
    /**
     * 
     * @type {number}
     * @memberof AudioQuery
     */
    outputSamplingRate: number;
    /**
     * 
     * @type {boolean}
     * @memberof AudioQuery
     */
    outputStereo: boolean;
    /**
     * 
     * @type {string}
     * @memberof AudioQuery
     */
    kana?: string;
}

export function AudioQueryFromJSON(json: any): AudioQuery {
    return AudioQueryFromJSONTyped(json, false);
}

export function AudioQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accentPhrases': ((json['accent_phrases'] as Array<any>).map(AccentPhraseFromJSON)),
        'speedScale': json['speedScale'],
        'pitchScale': json['pitchScale'],
        'intonationScale': json['intonationScale'],
        'volumeScale': json['volumeScale'],
        'prePhonemeLength': json['prePhonemeLength'],
        'postPhonemeLength': json['postPhonemeLength'],
        'outputSamplingRate': json['outputSamplingRate'],
        'outputStereo': json['outputStereo'],
        'kana': !exists(json, 'kana') ? undefined : json['kana'],
    };
}

export function AudioQueryToJSON(value?: AudioQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accent_phrases': ((value.accentPhrases as Array<any>).map(AccentPhraseToJSON)),
        'speedScale': value.speedScale,
        'pitchScale': value.pitchScale,
        'intonationScale': value.intonationScale,
        'volumeScale': value.volumeScale,
        'prePhonemeLength': value.prePhonemeLength,
        'postPhonemeLength': value.postPhonemeLength,
        'outputSamplingRate': value.outputSamplingRate,
        'outputStereo': value.outputStereo,
        'kana': value.kana,
    };
}

