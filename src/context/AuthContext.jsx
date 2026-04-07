import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('aihub_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Dummy validation logic relying on local storage
    const users = JSON.parse(localStorage.getItem('aihub_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { email: foundUser.email, name: foundUser.name, role: foundUser.role || 'user' };
      setUser(userData);
      localStorage.setItem('aihub_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, error: 'Email yoki parol noto\'g\'ri' };
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('aihub_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Bu email ro\'yxatdan o\'tgan' };
    }
    
    const newUser = { name, email, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('aihub_users', JSON.stringify(users));
    
    const userData = { email, name, role: 'user' };
    setUser(userData);
    localStorage.setItem('aihub_user', JSON.stringify(userData));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aihub_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
