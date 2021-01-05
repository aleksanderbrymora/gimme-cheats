import { ResolveField, Resolver, Root } from '@nestjs/graphql';
import * as humanize from 'humanize-duration';
import { Base } from './base.entity';

/**
 * This hellish thing is to just add the functionality to return a human readable
 * `ago` parameter. Since this thing is going to be used in multiple places i wanted
 * to use the Resolver Inheritance for it so i dont have to write it every time
 * @param classRef A entity to use to search through for updatedAt value
 */
export const BaseResolver = <T>(classRef: T): any => {
  @Resolver(() => classRef, { isAbstract: true })
  abstract class BaseResolverHost {
    @ResolveField(() => String)
    humanDate(@Root() type: T): string {
      const now = Date.now();
      const updated = Date.parse(
        ((type as unknown) as Base).updatedAt.toString(),
      );
      const diff = now - updated;
      const humanized = humanize(diff, { round: true, largest: 2 });
      return `Created ${humanized} ago`;
    }
  }
  return BaseResolverHost;
};
