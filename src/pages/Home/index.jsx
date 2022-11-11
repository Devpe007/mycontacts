import { Link } from 'react-router-dom';

import {
  Container,
  ListHeader,
  Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';

import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyList />
          )}

          {(contacts.length > 0 && filteredContacts.length < 1) && (
            <SearchNotFound
              searchTerm={searchTerm}
            />
          )}

          {filteredContacts.length > 0 && (
          <ListHeader
            orderBy={orderBy}
          >
            <button
              type="button"
              onClick={handleToggleOrderBy}
            >
              <span>Nome</span>
              <img
                src={arrow}
                alt="Arrow"
              />
            </button>
          </ListHeader>
          )}

          {filteredContacts.map((contact) => (
            <Card key={contact.id}>
              <div
                className="info"
              >
                <div
                  className="contact-name"
                >
                  <strong>{contact.name}</strong>
                  {contact.category.name && (
                  <small>{contact.category.name}</small>
                  )}
                </div>

                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>

              <div
                className="actions"
              >
                <Link to={`/edit/${contact.id}`}>
                  <img
                    src={edit}
                    alt="Edit"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img
                    src={trash}
                    alt="Delete"
                  />
                </button>
              </div>
            </Card>
          ))}

          <Modal
            danger
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            title={`Tem certeza que deseja remover o contato ”${contactBeingDeleted?.name}”?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>

        </>
      )}
    </Container>
  );
};
