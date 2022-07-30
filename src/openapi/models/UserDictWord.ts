/* tslint:disable */
/* eslint-disable */
/**
 * VOICEVOX ENGINE
 * VOICEVOXの音声合成エンジンです。
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 辞書のコンパイルに使われる情報
 * @export
 * @interface UserDictWord
 */
export interface UserDictWord {
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    surface: string;
    /**
     *
     * @type {number}
     * @memberof UserDictWord
     */
    priority: number;
    /**
     *
     * @type {number}
     * @memberof UserDictWord
     */
    contextId?: number;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    partOfSpeech: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    partOfSpeechDetail1: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    partOfSpeechDetail2: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    partOfSpeechDetail3: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    inflectionalType: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    inflectionalForm: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    stem: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    yomi: string;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    pronunciation: string;
    /**
     *
     * @type {number}
     * @memberof UserDictWord
     */
    accentType: number;
    /**
     *
     * @type {number}
     * @memberof UserDictWord
     */
    moraCount?: number;
    /**
     *
     * @type {string}
     * @memberof UserDictWord
     */
    accentAssociativeRule: string;
}

export function UserDictWordFromJSON(json: any): UserDictWord {
    return UserDictWordFromJSONTyped(json, false);
}

export function UserDictWordFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDictWord {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'surface': json['surface'],
        'priority': json['priority'],
        'contextId': !exists(json, 'context_id') ? undefined : json['context_id'],
        'partOfSpeech': json['part_of_speech'],
        'partOfSpeechDetail1': json['part_of_speech_detail_1'],
        'partOfSpeechDetail2': json['part_of_speech_detail_2'],
        'partOfSpeechDetail3': json['part_of_speech_detail_3'],
        'inflectionalType': json['inflectional_type'],
        'inflectionalForm': json['inflectional_form'],
        'stem': json['stem'],
        'yomi': json['yomi'],
        'pronunciation': json['pronunciation'],
        'accentType': json['accent_type'],
        'moraCount': !exists(json, 'mora_count') ? undefined : json['mora_count'],
        'accentAssociativeRule': json['accent_associative_rule'],
    };
}

export function UserDictWordToJSON(value?: UserDictWord | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'surface': value.surface,
        'priority': value.priority,
        'context_id': value.contextId,
        'part_of_speech': value.partOfSpeech,
        'part_of_speech_detail_1': value.partOfSpeechDetail1,
        'part_of_speech_detail_2': value.partOfSpeechDetail2,
        'part_of_speech_detail_3': value.partOfSpeechDetail3,
        'inflectional_type': value.inflectionalType,
        'inflectional_form': value.inflectionalForm,
        'stem': value.stem,
        'yomi': value.yomi,
        'pronunciation': value.pronunciation,
        'accent_type': value.accentType,
        'mora_count': value.moraCount,
        'accent_associative_rule': value.accentAssociativeRule,
    };
}

