/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { useActions } from 'kea';

import { i18n } from '@kbn/i18n';
import { EuiButton } from '@elastic/eui';

import { DocumentCreationLogic, DocumentCreationModal } from '../document_creation';

export const DocumentCreationButton: React.FC = () => {
  const { showCreationModes } = useActions(DocumentCreationLogic);

  return (
    <>
      <EuiButton
        fill={true}
        color="primary"
        data-test-subj="IndexDocumentsButton"
        onClick={showCreationModes}
      >
        {i18n.translate('xpack.enterpriseSearch.appSearch.documents.indexDocuments', {
          defaultMessage: 'Index documents',
        })}
      </EuiButton>
      <DocumentCreationModal />
    </>
  );
};
