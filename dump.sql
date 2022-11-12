--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: logs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logs (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    image character varying(255),
    platform character varying(255) NOT NULL,
    genre character varying(255) NOT NULL,
    status character varying(100) DEFAULT 'wishlist'::character varying NOT NULL,
    review character varying(255),
    rating integer
);


ALTER TABLE public.logs OWNER TO postgres;

--
-- Name: logs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.logs_id_seq OWNER TO postgres;

--
-- Name: logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;


--
-- Name: logs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);


--
-- Data for Name: logs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.logs (id, name, image, platform, genre, status, review, rating) FROM stdin;
1	Ape Escape 2	https://en.wikipedia.org/wiki/Ape_Escape_2#/media/File:Ape_Escape_2_Coverart.png	PS2	Platformer	completed	Amazing PS2 game! Very nostalgic and fun!	10
4	God of War	https://www.mobygames.com/images/covers/l/474565-god-of-war-playstation-4-front-cover.png	PS4	Adventure	wishlist	\N	\N
2	Demon's Souls	https://c.opencritic.com/images/games/10255/vgVrLFfUXzeZA55O2iDcZoDZwugslmW7T1I8Z0GZjH5gGsH5.jpg	PS5	RPG	wishlist	\N	\N
3	Elden Ring	https://www.videogameschronicle.com/files/2021/06/eldenring.jpg	PS5	RPG	playing	\N	\N
\.


--
-- Name: logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logs_id_seq', 9, true);


--
-- Name: logs logs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT logs_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
