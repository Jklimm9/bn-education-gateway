import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
// import dotenv from 'dotenv';

let userid: number[] = [123456];

export function tg(formData: any) {
    userid.forEach((id: number) => {
       createPostWithAxiosTS(formData, id);
    });
}

interface Post {
	id?: number;
	name: string;
	phone: string;
	email: string;
	message: string;
	body: string;
	userId: number;
}

// const config = import.meta.env.VITE_TG_KEY; // will return an object
// console.log(typeof config, config) // object { BASIC : 'basic' }
async function createPostWithAxiosTS(e: any): Promise<void> {
    const usersName = JSON.stringify({ chat_id: -1002703349420, text: '<b>Name:</b> '+e.name+'\n<b>Phone:</b> '+e.phone+'\n<b>Email:</b> '+e.email+'\n<b>Message:</b> '+e.message, parse_mode: 'HTML' });

  try {
    // Указываем тип ожидаемого ответа
    const response: AxiosResponse<Post> = await axios.post(
      'https://api.telegram.org/'+import.meta.env.VITE_TG_KEY+'/sendMessage',
      usersName, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
      }
    );
    console.log('Post created successfully:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Failed to create post:', error.message);
    } else {
      console.error('An unexpected error occurred:', error);
    }
  }
}