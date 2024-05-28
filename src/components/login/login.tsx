import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/login', { name, password });
          const { token, isLoggedIn, userId } = response.data;
          localStorage.setItem('token', token);
          if (isLoggedIn) {
              // Użytkownik jest zalogowany, wykonaj odpowiednią logikę
              console.log('Użytkownik jest zalogowany. UserId:', userId);
              // Możesz przekierować użytkownika na inną stronę, np. /dashboard
              // lub wykonać inne działania w zależności od potrzeb
          } else {
              console.log('Użytkownik nie jest zalogowany.');
          }
      } catch (error) {
          console.error('Błąd logowania:', error);
      }
  };
  

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Nazwa użytkownika" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="password" placeholder="Hasło" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Zaloguj</button>
        </form>
    );
}

export default LoginPage;
