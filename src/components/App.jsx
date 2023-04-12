import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from "react";
import { useDispatch } from 'react-redux';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/home'));
const RegistrationPage = lazy(() => import('../pages/registration'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export default function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/registration"
            element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
            }
          />
          <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
          <Route
            path="/contacts"
            element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
         </Route>
      </Routes>
  );
};


// import { GlobalStyle } from "GlobalStyle";
// import { ContactsForm } from "./ContactsForm/contactsForm";
// import { ContactsList } from "./contactsList";
// import { Filter } from "./Filter/filter";
// import { Layout } from "./Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "redux/operations";
// import { selectError, selectIsLoading } from "redux/selectors";

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
  
//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Layout>
//       <h1>Phonebook</h1>
//         <ContactsForm />
//           {isLoading && !error && <b>Request in progress...</b>}
//       <h2>Contacts</h2>
//         <Filter />
//         <ContactsList />
//         <GlobalStyle />
//     </Layout>
//   );
// };