import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      semi: ['error', 'always'],
      eqeqeq: 'error',
      'react/jsx-key': 'error',
      'react/no-array-index-key': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        // 변수 - camelCase (React 컴포넌트 제외)
        {
          selector: 'variable',
          format: ['camelCase'],
          filter: {
            regex: '^[A-Z]',
            match: false,
          },
        },
        // React 컴포넌트 변수 - PascalCase
        {
          selector: 'variable',
          format: ['PascalCase'],
          filter: {
            regex: '^[A-Z]',
            match: true,
          },
        },
        // 상수 - UPPER_CASE
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE'],
        },
        // 함수 - camelCase 또는 PascalCase (컴포넌트용)
        {
          selector: 'function',
          format: ['camelCase', 'PascalCase'],
        },
        // 매개변수 - camelCase
        {
          selector: 'parameter',
          format: ['camelCase'],
        },
        // 객체 프로퍼티 - camelCase
        {
          selector: 'property',
          format: ['camelCase'],
        },
        // 타입, 인터페이스, 클래스 - PascalCase
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        // enum - PascalCase
        {
          selector: 'enum',
          format: ['PascalCase'],
        },
        // enum 멤버 - UPPER_CASE
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
    },
  },
  {
    // 해당 설정 파일에서는 eslint 설정 적용안되게하기
    files: ['eslint.config.mjs'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
];

export default eslintConfig;
