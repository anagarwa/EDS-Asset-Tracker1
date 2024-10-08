/*
* <license header>
*/

/**
 * This is a sample action showcasing how to access an external API
 *
 * Note:
 * You might want to disable authentication and authorization checks against Adobe Identity Management System for a generic action. In that case:
 *   - Remove the require-adobe-auth annotation for this action in the manifest.yml of your application
 *   - Remove the Authorization header from the array passed in checkMissingRequestInputs
 *   - The two steps above imply that every client knowing the URL to this deployed action will be able to invoke it without any authentication and authorization checks against Adobe Identity Management System
 *   - Make sure to validate these changes against your security requirements before deploying the action
 */


const fetch = require('node-fetch')
const { Core } = require('@adobe/aio-sdk')
const { errorResponse, getBearerToken, stringParameters, checkMissingRequestInputs } = require('../utils')

// main function that will be executed by Adobe I/O Runtime
async function main (params) {
  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })
    const requiredHeaders = [];
    var errorMessage = checkMissingRequestInputs(params, [], requiredHeaders)
    if (errorMessage) {
        // return and log client errors
        return errorResponse(400, errorMessage, logger)
    }

    const response = {
        statusCode: 200,
        body: {payload: ' Successfull'}
    }
    return response
}

exports.main = main
