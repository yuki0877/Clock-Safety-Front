<template>
    <footer class="footer">
      <ul class="footer-list">
        <li>
          <router-link class="footer-link" to="/privacypolicy">プライバシーポリシー</router-link>
        </li>
        <li>
          <router-link class="footer-link" to="/termsofservice">利用規約</router-link>
        </li>
      </ul>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #333;
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
  }
  
  .footer-list {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-link {
    font-size: 1rem;
    color: white;
    margin: 0 15px;
    text-decoration: none;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  </style>
  