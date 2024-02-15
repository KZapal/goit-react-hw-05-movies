import { Container, Form, Input, Btn } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ searchQuery, handleChange, handleSubmit }) => {
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={handleChange}
          ></Input>
          <Btn type="submit">Search</Btn>
        </Form>
      </Container>
    </>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
