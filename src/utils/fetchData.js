import { useState, useEffect } from 'react';
import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { collection, query, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

/**
 * @deprecated INSTEAD USE getEntriesQuery
 */
export const fetchEntries = () => {
  const ref = query(collection(db, 'Entries'));
  const entriesQuery = useFirestoreQuery(['Entries'], ref);
  if (entriesQuery.isLoading) {
    return undefined;
  }
  const snapshot = entriesQuery.data;
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

/**
 * @deprecated INSTEAD USE getTermsQuery
 */
export const fetchTerms = () => {
  const ref = query(collection(db, 'Terms'));
  const termsQuery = useFirestoreQuery(['Terms'], ref);
  if (termsQuery.isLoading) {
    return undefined;
  }
  const snapshot = termsQuery.data;
  return snapshot.docs.reduce((prev, doc) => {
    prev[doc.id] = doc.data().name;
    return prev;
  }, {});
};

export const fetchUsers = () => {
  const ref = query(collection(db, 'Users'));
  const usersQuery = useFirestoreQuery(['Users'], ref);
  if (usersQuery.isLoading) {
    return undefined;
  }
  const snapshot = usersQuery.data;
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
