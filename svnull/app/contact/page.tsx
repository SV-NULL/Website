const ContactPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-yellow-500">
        Contact
      </h1>
      <p className="mt-4 text-lg text-center">
        Heb je vragen? Neem gerust contact met ons op!
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Onze gegevens:</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <strong>Email:</strong> info@studievereniging.nl
          </li>
          <li>
            <strong>Telefoon:</strong> +31 20 123 4567
          </li>
          <li>
            <strong>Adres:</strong> Straatnaam 123, 1234 AB Stad
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
