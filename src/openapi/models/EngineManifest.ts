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
import {
    LicenseInfo,
    LicenseInfoFromJSON,
    LicenseInfoFromJSONTyped,
    LicenseInfoToJSON,
    UpdateInfo,
    UpdateInfoFromJSON,
    UpdateInfoFromJSONTyped,
    UpdateInfoToJSON,
} from './';

/**
 * エンジン自体に関する情報
 * @export
 * @interface EngineManifest
 */
export interface EngineManifest {
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    manifestVersion: string;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    uuid: string;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    icon: string;
    /**
     *
     * @type {number}
     * @memberof EngineManifest
     */
    defaultSamplingRate: number;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    termsOfService: string;
    /**
     *
     * @type {Array<UpdateInfo>}
     * @memberof EngineManifest
     */
    updateInfos: Array<UpdateInfo>;
    /**
     *
     * @type {Array<LicenseInfo>}
     * @memberof EngineManifest
     */
    dependencyLicenses: Array<LicenseInfo>;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    downloadableLibrariesPath?: string;
    /**
     *
     * @type {string}
     * @memberof EngineManifest
     */
    downloadableLibrariesUrl?: string;
}

export function EngineManifestFromJSON(json: any): EngineManifest {
    return EngineManifestFromJSONTyped(json, false);
}

export function EngineManifestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EngineManifest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'manifestVersion': json['manifest_version'],
        'name': json['name'],
        'uuid': json['uuid'],
        'url': json['url'],
        'icon': json['icon'],
        'defaultSamplingRate': json['default_sampling_rate'],
        'termsOfService': json['terms_of_service'],
        'updateInfos': ((json['update_infos'] as Array<any>).map(UpdateInfoFromJSON)),
        'dependencyLicenses': ((json['dependency_licenses'] as Array<any>).map(LicenseInfoFromJSON)),
        'downloadableLibrariesPath': !exists(json, 'downloadable_libraries_path') ? undefined : json['downloadable_libraries_path'],
        'downloadableLibrariesUrl': !exists(json, 'downloadable_libraries_url') ? undefined : json['downloadable_libraries_url'],
    };
}

export function EngineManifestToJSON(value?: EngineManifest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'manifest_version': value.manifestVersion,
        'name': value.name,
        'uuid': value.uuid,
        'url': value.url,
        'icon': value.icon,
        'default_sampling_rate': value.defaultSamplingRate,
        'terms_of_service': value.termsOfService,
        'update_infos': ((value.updateInfos as Array<any>).map(UpdateInfoToJSON)),
        'dependency_licenses': ((value.dependencyLicenses as Array<any>).map(LicenseInfoToJSON)),
        'downloadable_libraries_path': value.downloadableLibrariesPath,
        'downloadable_libraries_url': value.downloadableLibrariesUrl,
    };
}

