import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ContactsService from '../../services/ContactsService';

import toast from '../../utils/toast';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

export default function EditContact() {
  const [isLoading, setIsloading] = useState(true);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        console.log({ contactData });

        setIsloading(false);
      } catch {
        history.push('/');

        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    };

    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader
        title="Editar Mateus Silva"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
};
