import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

export function ApiRegisterFiles() {
  return applyDecorators(
    UseInterceptors(FileInterceptor('file')),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          URLPersonalAccidentsInsurance: {
            type: 'file',
            format: 'binary',
          },
          URLIdentityCard: {
            type: 'file',
            format: 'binary',
          },
          URLform101: {
            type: 'file',
            format: 'binary',
          },
          URLHiringContract: {
            type: 'file',
            format: 'binary',
          },
          URLInsurancePolicy: {
            type: 'file',
            format: 'binary',
          },
          URLCarLicense: {
            type: 'file',
            format: 'binary',
          },
          URLDrivingLicense: {
            type: 'file',
            format: 'binary',
          },
        },
      },
    }),
  );
}

export function ApiProfileFiles() {
  return applyDecorators(
    UseInterceptors(FileInterceptor('file')),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          URLDrivingLicense: {
            type: 'file',
            format: 'binary',
          },
          URLCarLicense: {
            type: 'file',
            format: 'binary',
          },
          URLPersonalAccidentsInsurance: {
            type: 'file',
            format: 'binary',
          },
          URLPensionPolicy: {
            type: 'file',
            format: 'binary',
          },
          URLLifeInsurance: {
            type: 'file',
            format: 'binary',
          },
          URLHealthInsurance: {
            type: 'file',
            format: 'binary',
          },
          URLInsurancePolicy: {
            type: 'file',
            format: 'binary',
          },
        },
      },
    }),
  );
}
