import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

import type { RouterOutputs } from "~/utils/api";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Image
        alt="profile image"
        src={author.profileImageUrl}
        className="h-16 w-16 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`} </span>
          </Link>
          <Link href={`/post/${post.id}`}>
            <span>{` - ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <span>{post.content}</span>
      </div>
    </div>
  );
};
