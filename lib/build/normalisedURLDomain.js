"use strict";
/* Copyright (c) 2021, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnIpAddress = void 0;
function isAnIpAddress(ipaddress) {
    return /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress);
}
exports.isAnIpAddress = isAnIpAddress;
var NormalisedURLDomain = /** @class */ (function () {
    function NormalisedURLDomain(url) {
        var _this = this;
        this.getAsStringDangerous = function () {
            return _this.value;
        };
        this.value = normaliseURLDomainOrThrowError(url);
    }
    return NormalisedURLDomain;
}());
exports.default = NormalisedURLDomain;
function normaliseURLDomainOrThrowError(input, ignoreProtocol) {
    if (ignoreProtocol === void 0) { ignoreProtocol = false; }
    input = input.trim();
    try {
        if (!input.startsWith("http://") && !input.startsWith("https://")) {
            throw new Error("converting to proper URL");
        }
        var urlObj = new URL(input);
        if (ignoreProtocol) {
            if (urlObj.hostname.startsWith("localhost") || isAnIpAddress(urlObj.hostname)) {
                input = "http://" + urlObj.host;
            }
            else {
                input = "https://" + urlObj.host;
            }
        }
        else {
            input = urlObj.protocol + "//" + urlObj.host;
        }
        return input;
        // eslint-disable-next-line no-empty
    }
    catch (err) { }
    if (input.startsWith("/")) {
        throw new Error("Please provide a valid domain name");
    }
    // not a valid URL
    if (input.indexOf(".") === 0) {
        input = input.substr(1);
    }
    // If the input contains a . it means they have given a domain name.
    // So we try assuming that they have given a domain name
    if ((input.indexOf(".") !== -1 || input.startsWith("localhost")) &&
        !input.startsWith("http://") &&
        !input.startsWith("https://")) {
        input = "https://" + input;
        // at this point, it should be a valid URL. So we test that before doing a recursive call
        try {
            new URL(input);
            return normaliseURLDomainOrThrowError(input, true);
            // eslint-disable-next-line no-empty
        }
        catch (err) { }
    }
    throw new Error("Please provide a valid domain name");
}
