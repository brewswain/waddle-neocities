"use client";

import { PostMetaDataProp, getAllPostsMetaData } from "@/app/dev-blog/utils";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

interface PostsContainerProps {
  posts: PostMetaDataProp[];
}

import { useContext } from "react";
import { TagContext } from "@/context/TagsContext";

const PostsContainer = ({ posts }: PostsContainerProps) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const { selectedTags, inclusionMode } = useContext(TagContext);

  useEffect(() => {
    if (selectedTags) {
      const taggedPosts = posts.filter((post) => {
        const formattedTags =
          inclusionMode === "&&"
            ? selectedTags.every((selectedTag) =>
                post.tags?.includes(selectedTag)
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
      className="flex flex-col gap-4 p-4 flex-wrap sm:flex-row"
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
              className="max-w-[300px] h-[100px] mb-6"
            >
              <Link href={`dev-blog/${post.slug}.html`}>
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
