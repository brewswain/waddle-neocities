"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import PostCard from "./PostCard";

import { TagContext } from "@/context/TagsContext";
import { PostMetaDataProp } from "@/app/dev-blog/utils";
import { isDevelopmentEnvironment } from "@/app/consts/utils";

interface PostsContainerProps {
  posts: PostMetaDataProp[];
}

const PostsContainer = ({ posts }: PostsContainerProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const { selectedTags, inclusionMode } = useContext(TagContext);

  useEffect(() => {
    if (selectedTags) {
      const taggedPosts = posts.filter((post) => {
        const formattedTags =
          inclusionMode === "&&"
            ? selectedTags.every((selectedTag) =>
                post.tags?.includes(selectedTag),
              )
            : post.tags?.map((element) => {
                return selectedTags.includes(element);
              });
        return inclusionMode === "&&"
          ? formattedTags
          : (formattedTags as boolean[])?.some(Boolean); // Return true if at least one tag matches
      });
      if (inclusionMode === "||" && selectedTags.length === 0) {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(taggedPosts);
      }
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedTags, posts, inclusionMode]);

  return (
    <motion.section
      className="flex flex-col flex-wrap items-center gap-4 p-4 sm:flex-row sm:items-start"
      layout
    >
      <AnimatePresence>
        {filteredPosts.map((post) => {
          return (
            <motion.article
              key={post.slug}
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 min-h-[100px] max-w-[300px]"
            >
              <Link
                href={
                  isDevelopmentEnvironment
                    ? `dev-blog/${post.slug}`
                    : `dev-blog/${post.slug}.html`
                }
              >
                <PostCard
                  title={post.title}
                  publishDate={post.publishDate}
                  tags={post.tags || []}
                />
              </Link>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </motion.section>
  );
};

export default PostsContainer;
